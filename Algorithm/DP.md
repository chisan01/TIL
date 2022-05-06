# Dynamic Programming

반복되는 연산의 결과를 저장해서 사용함으로써 반복 횟수를 크게 줄이는 프로그램이 기법.

<br>

## DP의 특성

* 중복되는 부분 문제
* 최적 부분 구조
* 메모이제이션
* 점화식

<br>

## DP 구현 방법

* ### Bottom-Up

  기저 사례부터 시작해서 마지막에 해답을 구하는 방식

  반복문으로 구현한다.

  > Bottom-Up의 경우 배열에 값이 어떤 식으로 저장되어야할지 표로 그려보면서 생각해보면 점화식을 생각하는데 많은 도움이 되는 것 같다.

* ### Top-Down

  해답을 구하기 위해서 부분 문제를 재귀적으로 호출해나가는 방식

  재귀함수로 구현한다.

대부분의 DP 문제는 2가지 방법으로 모두 구현할 수 있지만, 문제에 따라 구현이 더 편한 방법이 존재한다고 한다.

반복문으로 구현하는게 좋을지, 재귀함수로 구현하는게 좋을지 감을 잡기 위해서 많은 DP 문제를 풀어보고 초반에는 2가지 방법을 모두 사용해서 풀어보는게 좋을 것 같다. 