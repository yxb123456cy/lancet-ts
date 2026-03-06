import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'
/**
 * 剩余步骤；
 * 1. 集成RsDoctor(✅) 以及Github Actions自动产出doctor报告(✅);
 * 2. 将Biome迁移至Rslint(❌ Rslint不具备format的能力 不进行迁移)
 * 3. RsLib与core模块-package.json调优(✅);NPM包发布;github Actions自动NPM包发布; 
 * 4. Rspress文档站点内容补充;
 * 5. 完善项目README.md文件(✅);
 * 6. changeLog与版本发布补充;
 * 7. Rspress加上ChangeLog;
 * 8. 函数库补充;
 */
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
    // run('pnpm run lint', coreDir)
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