Parallel runs
npx playwright test  --project="chromium"

#RMS
npx playwright test tests/rms-parallel1.spec.ts --project="chromium" --headed

#MyAccount
npx playwright test tests/myacc-parallel1.spec.ts --project="chromium" --headed