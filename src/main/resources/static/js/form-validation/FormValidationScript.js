/**
 * This configures the defined lambda function to listen to input events to validate.
 * Check the link below for more details about form validations.
 *
 * @see https://formvalidation.io/guide/getting-started/usage
 */
const main = () => {

  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    /* Login form validation starts */
    FormValidation.formValidation(
        loginForm,
        {
          fields: {
            username: {
              validators: {
                notEmpty: {
                  message: 'The username is required'
                },
                stringLength: {
                  min: 3,
                  max: 50,
                  message: 'The username must be more than 3 and less than 50 characters'
                }
              }
            },
            password: {
              validators: {
                notEmpty: {
                  message: 'The password is required'
                },
                stringLength: {
                  min: 4,
                  message: 'The password must be more than 3 characters'
                }
              }
            },
            terms: {
              validators: {
                notEmpty: {
                  message: 'You must agree before submitting.'
                }
              }
            }
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
              rowSelector: '.mb-3',
            }),
            submitButton: new FormValidation.plugins.SubmitButton(),
            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            icon: new FormValidation.plugins.Icon({
              valid: 'fa fa-check',
              invalid: 'fa fa-times',
              validating: 'fa fa-refresh'
            }),
          },
        },
    ); /* Login form validation ends */
  }

  const signUpForm = document.getElementById('sign-up-form');
  if (signUpForm) {
    /* Sign up form validation starts */
    FormValidation.formValidation(
        signUpForm,
        {
          fields: {
            username: {
              validators: {
                notEmpty: {
                  message: 'The username is required'
                },
                stringLength: {
                  min: 3,
                  max: 50,
                  message: 'The username must be more than 3 and less than 50 characters'
                }
              }
            },
            email: {
              validators: {
                notEmpty: {
                  message: 'The email is required'
                },
                emailAddress: {
                  message: 'The input is not a valid email address'
                },
                different: {
                  field: 'username',
                  message: "The username and email must be different"
                }
              }
            },
            password: {
              validators: {
                notEmpty: {
                  message: 'The password is required'
                },
                stringLength: {
                  min: 4,
                  message: 'The password must be more than 3 characters'
                }
              }
            },
            terms: {
              validators: {
                notEmpty: {
                  message: 'Please agree to the terms and conditions to continue'
                }
              }
            },
          },
          plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap5: new FormValidation.plugins.Bootstrap5({
              rowSelector: '.mb-3',
            }),
            submitButton: new FormValidation.plugins.SubmitButton(),
            defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            icon: new FormValidation.plugins.Icon({
              valid: 'fa fa-check',
              invalid: 'fa fa-times',
              validating: 'fa fa-refresh'
            }),
          },
        }
    ); /* Sign up form validation ends */
  }
};

$(document).ready(main);
