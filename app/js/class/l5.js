/// 数值扩展

// 二进制 八进制
{
    // 0b开头表示二进制 不区分大小写
    console.log(0b111110111)
    console.log(0B111110111)
    // 八进制以0o开头
    console.log(0o767)
    console.log(0O767)
}

// Number.isFinite(), Number.isNaN()
{
    // Number.isFinite()检查一个数值是否为有限的(finite)
    console.log('10 isFinite---',Number.isFinite(10))
    console.log('NaN isFinite---',Number.isFinite(NaN))
    console.log('1/0 isFinite---',Number.isFinite(1/0))

    // Number.isNaN()检查一个值是不是数字 (NaN非数字值)
    console.log('NaN isNaN---',Number.isNaN(NaN))
    console.log('0 isNaN---',Number.isNaN(0))
    console.log('1/0 isNaN---',Number.isNaN(1/0))
}
// Number.isInteger() 用来判断一个值是否为整数
{
    console.log('20 isInteger---',Number.isInteger(20))
    console.log('20.0 isInteger---',Number.isInteger(20.0))
    console.log('0.2 isInteger---',Number.isInteger(0.2))
    console.log('"2" isInteger---',Number.isInteger('2'))
}
// 安全整数和Number.isSafeInteger()
{
    // 安全数区间-2^53 ~ 2^53
    // JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
    console.log(Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)
    console.log('10 isSafeInteger---',Number.isSafeInteger(10))
    console.log('a isSafeInteger---',Number.isSafeInteger('a'))
    console.log('10.1 isSafeInteger---',Number.isSafeInteger(10.1))
}

// Math.trunc()用于去除一个数的小数部分，返回整数部分
{
    console.log('4.1 trunc---',Math.trunc(4.1))
    console.log('4.9 trunc---',Math.trunc(4.9))
}
// Math.sign() 判断一个值的正负，但如果参数是-0，它会返回-0
{
    console.log('5 sign---',Math.sign(5))
    console.log('-5 sign---',Math.sign(-5))
    console.log('0 sign---',Math.sign(0))
    console.log('-0 sign---',Math.sign(-0))
    console.log('"55" sign---',Math.sign('55'))
    console.log('"-55" sign---',Math.sign('-55'))
    console.log('a sign---',Math.sign('aa'))
}
// 立方根 Math.cbrt()
{
    console.log('-1 的立方根[cbr()]---',Math.cbrt(-1))
    console.log('8 的立方根[cbr()]---',Math.cbrt(8))

}
// 对数方法
{
    // Math.expm1() 
    // Math.expm1(x)返回ex - 1，即Math.exp(x) - 1
    console.log('1 expm1---',Math.expm1(1))
    console.log('0 expm1---',Math.expm1(0))
    console.log('-1 expm1---',Math.expm1(-1))

    // 对于没有部署这个方法的环境，可以用下面的代码模拟
    Math.expm1 = Math.expm1 || function(x){
        return Math.exp(x) - 1;
    }
    // Math.log1p()
    // Math.log1p(x)方法返回1+x的自然对数，即Math.log(1+x)。如果x小于-1,返回NaN
    console.log('1 log1p---',Math.log1p(1))
    console.log('0 log1p---',Math.log1p(0))
    console.log('-1 log1p---',Math.log1p(-1))
    console.log('-2 log1p---',Math.log1p(-2))
    // 对于没有部署这个方法的环境，可以用下面的代码模拟
    Math.log1p =  Math.log1p || function(x){
        return Math.log(1+x);
    }

    // Math.log10() 
    // Math.log10(x)返回以10为底的x的对数。如果x小于0，则返回NaN
    console.log('10 log10---:',Math.log10(10))
    console.log('2 log10---:',Math.log10(2))
    console.log(' log10---:',Math.log10(1))
    console.log('0 log10---:',Math.log10(0))

    // 对于没有部署这个方法的环境，可以用下面的代码模拟
    Math.log10 = Math.log10 || function(x){
        return Math.log(x) / Math.LN10; //LN10 属性就是 loge10，即 10 的自然对数
    }

    // Math.log2()
    // Math.log2(x) 返回以2为底的x的对数。 如果x小于0，则返回NaN
    console.log('3 log2---',Math.log2(3))
    console.log('2 log2---',Math.log2(2))
    console.log('1 log2---',Math.log2(1))
    console.log('0 log2---',Math.log2(0))
    console.log('-1 log2---',Math.log2(-1))
    console.log('1024 log2---',Math.log2(1024))
    console.log('1 << 29 log2---',Math.log2(1 << 29)) // 1<<29表示1对应的二进制左移29位，值为2的29次方

    // 对于没有部署这个方法的环境，可以用下面的代码模拟
    Math.log2 = Math.log2 || function(x){
        return Math.log(x) / Math.LN2;
    }

}
// 三角函数方法
{
    // ES6新增了6个双曲函数方法。
    
    // Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    console.log(Math.sinh(30))
    // Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    // Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    // Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    // Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    // Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
}
// 指数运算符 **
{
    console.log(2 ** 2)
    console.log(Math.pow(2,2))
    console.log(2 ** 3)
    console.log(Math.pow(2,3))

    let a = 1.5
    a **= 2 // 等同于a = a * a
    console.log(a)

    let b = 4;
    b **= 3 // 等同于b = b * b * b
    console.log(b)

    // 注意，在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
    console.log(Math.pow(99,99))
    console.log(99 ** 99)

    

}