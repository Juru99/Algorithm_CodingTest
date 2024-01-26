#include <iostream>
#include <vector>
using namespace std;

int sumGame(int gameCount) {
	int sameCount = 0;
	vector<int> swifts(gameCount + 1);
	vector<int> semaphores(gameCount + 1);

	for (int i = 1; i <= gameCount; i++) {
		cin >> swifts[i];
		swifts[i] = swifts[i - 1] + swifts[i];
	}
	for (int i = 1; i <= gameCount; i++) {
		cin >> semaphores[i];
		semaphores[i] = semaphores[i - 1] + semaphores[i];
	}
	for (int i = 1; i <= gameCount; i++) {
		if (swifts[i] == semaphores[i]) {
			sameCount = i;
		}
	}

	return sameCount;
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(0); 
    cout.tie(0);
    
	int gameCount = 0;
	cin >> gameCount;

	cout << sumGame(gameCount);

	return 0;
}