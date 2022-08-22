//emailRegex = /^[^\s@]+@[^\s@]+$/;
// passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const    EmailValidator = (Email) => {
  const EmailRegex = /^[^\s@]+@[^\s@]+$/;
  return EmailRegex.test(Email);
};

export const MotdepasseValidator = (Motdepasse) => {
  const MotdepasseRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  return MotdepasseRegex.test(Motdepasse);
};
