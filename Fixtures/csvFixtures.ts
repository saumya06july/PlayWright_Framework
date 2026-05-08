import { test as base, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

type register = {
  FirstName: string,
  LastName: string,
  email: string,
  Telephone: string,
  Password: string,
  ConfirmPassword: string
}

type csvFixtures = {
  regdata: register[]
}

export const dataTest = base.extend<csvFixtures>({
  regdata: async ({}, use) => {
    const regData = fs.readFileSync('testdata/register.csv', 'utf-8');

    const testdata: register[] = parse(regData, {
      columns: true,
      skip_empty_lines: true
    });

    await use(testdata);
  }
});

export { expect };