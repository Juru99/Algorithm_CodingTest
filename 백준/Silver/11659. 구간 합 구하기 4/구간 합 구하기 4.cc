#include <iostream>
#include <vector>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	int n = 0;
	int m = 0;
	int i = 1;
	int j = 1;

	cin >> n >> m;
	
	vector<int> sums(n + 1);
	vector<int> outputs(m);

	for (int count = 1; count <=  n; count++) {
		cin >> sums[count];
		sums[count] = sums[count - 1] + sums[count];
	}

	for (int count = 0; count < m; count++) {
		cin >> i >> j;

		if (i == 1) {
			outputs[count] = sums[j];
			continue;
		}
		outputs[count] = sums[j] - sums[i - 1];
	}

	for (int count = 0; count < m; count++) {
		cout << outputs[count] << '\n';
	}
}