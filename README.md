# 2021 SW개발 능력향상 프로그램

ICPC 대회 준비

---

### 1주차 강의 - 정수론

이론 강의를 진행하기전 Codeforces Round #713 (Div. 3)를 1h30m 동안 풀어보는 시간을 가졌는데 7문제 중 3문제를 풀었다.

#### 소인수분해, 에라토스테네스의 체

- O(logn) 약수 찾기

> 어떤 정수 n, a, b에 대해서
> n = a\*b, a<=b이면 1<=a<=logn이 성립

> [BOJ 14563 완전수](https://www.acmicpc.net/problem/14563)

```c++
int sum=1;
for(int i=2; i*i<=x; i++) {
  if(x%i==0) {
    sum += i;
    if(i*i != x) {
      sum += x/i;
    }
  }
}
```

> 이렇게 코드를 작성하면 실패로 결과가 나온다.
> i=1부터 시작하고 마지막에 sum -= x를 해주는 대신 1은 모든 수의 약수니깐 sum에 1을 미리 넣어주고 i=2부터 시작하면 결과적으로 동일해야된다고 생각하는데 왜 실패가 나오는지 이유를 잘 모르겠다.

- 소수 판별

> [BOJ 1978 소수찾기](https://www.acmicpc.net/problem/1978)

> 약수 찾기를 응용해서 2부터 log n까지만 고려해주면 된다. (약수는 쌍을 이루는데 그 중 한 수는 log n보다 무조건 작거나 같다.)

- 소인수분해

> [BOJ 11653 소인수분해](https://www.acmicpc.net/problem/11653)

> 마지막에 남은 수를 출력하기 위해서 i<=n까지 for문을 돌렸었는데 i\*i<=n으로 하다가 맨 마지막에 남은 수가 1보다 크면 소인수로 간주하도록 코드를 짜면 실행시간을 단축시킬 수 있다.

> 소인수가 하나 나오면 N/=i를 하고 다시 int i=2부터 다시 시작할 수도 있지만 동일한 소인수가 여러개 있는 경우를 생각해서 while(N%i==0)으로 동일한 소인수인 경우를 한번에 처리하고 가는것이 실행시간을 단축시키는데 도움이 될 것 같다.

```c++
int N;
cin >> N;
for (int i = 2; i*i <= N; i++) {
  while (N % i == 0) {
    cout << i << "\n";
    N /= i;
  }
}
if(N>1) cout << N << "\n";
```

- 에라토스테네스의 체

> 2이상 n 이하인 모든 소수를 구하는 알고리즘  
> 수행 시간 O(n log log n)  
> O(n)으로 구현: https://cp-algorithms.com/algebra/prime-sieve-linear.html

> [BOJ 1929 소수 구하기](https://www.acmicpc.net/problem/1929)

> 수를 지워나갈때 배수의 제곱부터 시작하면된다.  
> 예를 들어 7의 배수를 지워나갈때 7x2가 아닌 7x7부터 시작하면 된다. 왜냐하면 7x2는 2의 배수이기 때문. 따라서 7보다 작은 수와의 곱은 이미 앞에서 지워졌다.  
> ( 32ms -> 16ms )

```c++
for (int i = 2; i * i <= n; i++)
  if (arr[i] == 1)
    for (int j = i * i; j < arr.size(); j += i)
      arr[j] = 0;
```

- 에라토스테네스의 체를 사용한 빠른 소인수 분해

> [BOJ 16563 어려운 소인수분해](https://www.acmicpc.net/problem/16563)  
> 런타임 에러 (OutOfBounds) - 문제 조건을 잘못 읽어서 자연수의 범위가 1000000까지인줄 알아서 난 오류

> 시간초과 - 기존 코드에서 main 안에 아래 코드를 넣으면 해결.

```c++
  ios_base::sync_with_stdio(0); // 1
  cin.tie(0); // 2
```

참고: https://hegosumluxmundij.tistory.com/54

1. C++ 표준 스트림들이 C 표준 스트림들과 각각의 입출력 연산 후에 동기화 할지 여부를 설정. 동기화를 설정하지 않는다면, 표준 C++ 스트림들은 각각의 입출력 연산에 대해 버퍼를 사용할 수 있는데, 이 경우 입출력 연산 속도를 크게 향상 시킬 수 있다.  
   참고: https://modoocode.com/281
2.

> 강사님의 코드 수행시간 개선(792ms -> 616ms)  
> 소수 구하기에서 했던 것처럼 배수의 제곱부터 시작하면 중복되는 반복을 피할 수 있어서 수행시간을 단축하는데에 도움이 된다.  
> 소수에 해당하는 부분에 0이 들어가기 때문에 나중에 별개로 처리해줘야하지만

```c++
if (k > 1) cout << k << "\n";
```

> 나중에 정렬을 해줄 필요가 없어서 수행시간을 단축할 수 있다.
