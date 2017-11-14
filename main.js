const a = Symbol();
const b = Symbol();

class A {
    
    [a](){
      return 'a';
    }
    
    [b](){
      return 'b';
    }
  
}

const aa = new A();

aa[a]();
aa[b]();
