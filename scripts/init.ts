import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'
// npx wrangler deploy
const root = path.resolve(__dirname, '..')

function run(cmd: string, cwd: string) {
    console.log(`\n🚀 ${cmd}`)

    const [command, ...args] = cmd.split(' ')

    const result = spawnSync(command!, args, {
        cwd,
        stdio: 'inherit',
        shell: true
    })

    if (result.status !== 0) {
        console.error(`❌ Command failed: ${cmd}`)
        process.exit(result.status ?? 1)
    }
}

function copyFiles(srcDir: string, destDir: string) {
    fs.mkdirSync(destDir, { recursive: true })

    const files = fs
        .readdirSync(srcDir)
        .filter(f => f.endsWith('.md'))

    const meta = files
        .map(f => f.replace('.md', ''))
        .sort((a, b) => a.localeCompare(b))

    for (const file of files) {
        const src = path.join(srcDir, file)
        const dest = path.join(destDir, file)
        fs.copyFileSync(src, dest)
    }

    const metaPath = path.join(destDir, '_meta.json')
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2))

    console.log(`📄 Generated _meta.json (${meta.length} items)`)
}

function step(title: string) {
    console.log('\n==============================')
    console.log(title)
    console.log('==============================')
}

function init() {

    const coreDir = path.join(root, 'core')
    const docsDir = path.join(root, 'docs')

    const srcDocs = path.join(coreDir, 'docs/variables')
    const destDocs = path.join(docsDir, 'docs/api/core')

    const buildDir = path.join(docsDir, 'doc_build')

    step('STEP 1: core build')

    run('pnpm run format', coreDir)
    run('pnpm run lint', coreDir)
    run('pnpm run test', coreDir)
    run('pnpm run build', coreDir)

    step('STEP 2: generate docs')

    run('pnpm run gen:docs', coreDir)

    step('STEP 3: copy api docs')

    copyFiles(srcDocs, destDocs)

    step('STEP 4: build rspress docs')

    run(`pnpm run build -- --outDir ${buildDir}`, docsDir)

    step('STEP 5: deploy')

    // run('pnpm run deploy', root)
    console.log('开始部署流程')
    console.log('\n✅ All done!')
}

init()