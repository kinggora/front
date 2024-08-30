// sleep 함수는 일정시간(delay)이 지난 후에 콜백함수(func)를 호출한다.
function sleep(func, delay) {
    const delayTime = Date.now() + delay;
    while(Date.now() < delayTime);
    func();

}

function func1() {
    console.log("I'm func1");
}

function func2() {
    console.log("I'm func2");
}

sleep(func1, 3000);
sleep(func2); // sleep(func1, 3000)의 실행이 완료될 때까지 blocking