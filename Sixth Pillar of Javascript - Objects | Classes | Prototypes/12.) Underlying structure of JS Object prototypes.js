/*
Sunte re bantai, ab JS object prototypes ka funda tere ko ekdum kurla style mai deeply samjhata hoon. Samajh le boss, zyada tough nai hai ye!

1. Prototype hota kya hai?
Dekh, JS ke andar har object ke paas ek hidden property hoti hai, jisko bolte hai [[Prototype]]. Yeh ekdum "baap ka khazana" hai, jo dusre objects aur functions ke saath share hota hai.
2. Prototype chain ka funda?
Samajh le, jab tu kisi object se kuch maangta hai (e.g., obj.someProperty), toh pehle wo khud ka bag check karta hai:
Agar mila, toh chill maangta.
Agar nahi mila, toh bolega, "Chal mere baap ke paas dekhte hai" (uska [[Prototype]]).
Aise chain chalti rehti hai, jab tak ya toh wo mil jaye, ya chain ke end pe null aake bole "bhai kuch nai mila".
Example:

javascript

const bantai = { name: "Kurla Don" };
console.log(bantai.toString());
Toh bantai ke andar toString hai kya? Nahi.
Phir wo bantai ke [[Prototype]] pe jayega.
JS bolega, "Array ke na, function ke na, ya Object ke prototype me hoga." End me mil gaya Object.prototype.toString.
3. Prototype set kaise hota hai?
Jab tu object banata hai, uska [[Prototype]] automatic set hota hai:
Agar tu object literal ({}) banaya: iska prototype Object.prototype hota hai.
Agar new Function() use kiya: uska prototype function ka parent (Function.prototype) hota hai.
Example:

javascript

const bantai = {}; 
console.log(Object.getPrototypeOf(bantai)); // Output: Object.prototype
4. Custom prototype set karna
Agar tere ko bolna hai, "Bhai, mera khud ka prototype hona chahiye", toh tu Object.create() use kar:

javascript

const kurlaBoys = { gang: "Kurla" };
const newBantai = Object.create(kurlaBoys);
console.log(newBantai.gang); // Output: "Kurla"
Yahan newBantai ka [[Prototype]] set ho gaya kurlaBoys pe.
5. Function ka Prototype aur prototype Property
Ab sun, jab tu koi function banata hai, JS automatically uska ek special property banata hai, prototype.
Yeh constructor function ke objects ka baap hota hai.
Example:

javascript

function Don(name) {
  this.name = name;
}
Don.prototype.gang = "Kurla Kings";
const newDon = new Don("Gully Bantai");
console.log(newDon.gang); // Output: "Kurla Kings"
Yahan newDon ka [[Prototype]] set hai Don.prototype pe.
6. Prototype chain ka Limit
Sun, ek point ke baad null aata hai. Toh agar kuch milta nahi, chain yahin rukti hai:
javascript

console.log(Object.getPrototypeOf(Object.prototype)); // Output: null
7. Ekdum Deep Samajh: JS Engine ka Mechanism
Tera object ek blueprint follow karta hai.
Sab objects ka base Object.prototype hai.
Har function ka prototype uske aage chain banata hai.
Flow aise dekho:

Object maangta hai.
Khud ke bag me check karega.
Nahi mila, toh [[Prototype]] ke baap ke bag me check.
Repeat till null.
8. Practical Example: Chalu Life ka Prototype
javascript

const kurlaDon = { role: "Leader" };
const kurlaMember = Object.create(kurlaDon);

kurlaMember.name = "Bantai";
console.log(kurlaMember.role); // Output: "Leader"
console.log(kurlaMember.name); // Output: "Bantai"
kurlaMember ke paas role nai tha, uske baap kurlaDon ke paas gaya.
Samajh gaya na? Ab ekdam gully style mai prototype chain ka har scene clear! Tu JS ka don ban gaya ab! 😎







*/