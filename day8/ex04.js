function func1() {
    console.log("I'm func1");
}

function func2() {
    console.log("I'm func2");
}

// 타이머 함수를 이용해서 일정시간이 지나면 콜백함수를 호출하도록
// 타이머 함수: setTimeout() 블로킹하지 않는 성질이 있다.

setTimeout(func1, 3000);
func2();

// 비동기 처리
// 현재 실행 중인 태스크가 종료되지 않는 상태라도 다음 태스크를 곧바로 실행하는 방식
// 실행 순서 보장XX