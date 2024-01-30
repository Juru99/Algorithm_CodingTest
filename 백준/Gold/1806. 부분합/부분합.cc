#include <iostream>
#include <climits>
using namespace std;

int sums[100000 + 1];

void init() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
}

int solution() {
    int N, S;
    cin >> N >> S;
    for (int i = 1; i <= N; i++) {
        cin >> sums[i];
    }

    int start = 1, end = 1;
    int sum = sums[1];
    int minLength = 100000;

    while (start <= end && end <= N) {
        if (sum >= S) {
            minLength = min(minLength, end - start + 1);
            sum -= sums[start++];
        }
        else {
            sum += sums[++end];
        }
    }

    return minLength == 100000 ? 0 : minLength;
}

int main() {
    init();

    int minLength = solution();
    cout << minLength;

    return 0;
}