import {expect, test} from '@oclif/test'

describe('run', () => {
  test
    .stdout()
    .command(['run'])
    .it('runs run', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['run', '--list', 'jeff'])
    .it('runs run --list', ctx => {
      expect(ctx.stdout).to.contain('')
    })
})
