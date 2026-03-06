function maskEmail(email) {
  let atIndex = email.indexOf("@");
  
  let name = email.slice(0, atIndex); 
  let domain = email.slice(atIndex);    
  
  let first = name[0];
  let last = name[name.length - 1];
  
  let stars = "*".repeat(name.length - 2);
  
  return first + stars + last + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));