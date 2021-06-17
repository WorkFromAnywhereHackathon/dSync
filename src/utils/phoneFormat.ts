const phoneFormat = (phone: string): string => {
  const newPhone = phone.replace('+', '').replace('(', '').replace(')', '').split(' ').join('');

  return newPhone;
};

export default phoneFormat;
