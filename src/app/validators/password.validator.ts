import { FormGroup, ValidatorFn } from '@angular/forms';

export const passwordMatcherValidator: ValidatorFn = (fg: FormGroup) => {
  const password = fg.get('password').value;
  const reEnterPassword = fg.get('reEnterPassword').value;

  if (password !== reEnterPassword) {
    fg.get('reEnterPassword').setErrors({ invalid: true });
  }

  fg.setErrors(null);
  return null;
};
