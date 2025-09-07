export const searchInputValidation = {
    required: {
      value: true,
      message: "Enter some input value",
    },
    pattern: {
      value: /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
      message:
        "The value must be in hexadecimal format (#000 || #000000)",
    }
}