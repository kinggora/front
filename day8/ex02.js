const num1 = 1;
    
function func1() {
    const num2 = 2;
        
    function func2() {
        const num3 = 3;
        console.log(num1 + num2 + num3);
    }
    func2();
}
func1();