# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >>  Verify Valid Login
- Location: tests/Login.spec.ts:5:5

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /home/runner/.cache/ms-playwright/firefox-1511/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-U1ZCPO -juggler-pipe -silent
  - <launched> pid=7257
  - [pid=7257][err] [7259] Sandbox: CanCreateUserNamespace() unshare(CLONE_NEWPID): EPERM
  - [pid=7257][err] Error: no DISPLAY environment variable specified
  - [pid=7257] <process did exit: exitCode=1, signal=null>
  - [pid=7257] starting temporary directories cleanup
  - [pid=7257] <gracefully close start>
  - [pid=7257] <kill>
  - [pid=7257] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=7257] finished temporary directories cleanup
  - [pid=7257] <gracefully close end>

```