JavaScript Memory Management Kya Hai?

JavaScript apne variables aur data ko memory mein store karta hai, aur jab unki zaroorat khatam ho jati hai, to unko automatically free kar deta hai. Ye process memory allocation aur garbage collection ke through hota hai.

Kaise Kaam Karta Hai?

Memory Allocation (Jagah Banana):
Jab tu koi variable banata hai (jaise let x = 10; ya let obj = {}), JavaScript heap memory mein uske liye jagah allocate karta hai.
Har naye data (numbers, objects, arrays) ko memory mein ek specific address milta hai.
Memory Usage (Istemaal):
Tu jab code likhta hai, JavaScript un variables ko use karta hai, unki values ko access karta hai ya modify karta hai.
Memory Deallocation (Garbage Collection):
Jab koi variable ya object "unreachable" ho jata hai (matlab usko koi reference nahi bachta), JavaScript ka Garbage Collector uski memory ko free kar deta hai.
Ye automatic hota hai, tujhe manually kuch nahi karna.
Garbage Collection Kaise Hoti Hai?

// JavaScript Mark-and-Sweep algorithm use karta hai:

Mark: Ye check karta hai ki kaun se objects ab bhi reachable hai (jo variables ya functions ab bhi use mein hai).

Sweep: Jo unreachable hai (koi reference nahi), unki memory ko free kar deta hai.

