#include <iostream>
#include <vector>
using namespace std;

int main() {
    int GOLE_SCORE = 100;
    int SCORES_SIZE = 10;

    int finalScore = 0;

    vector<int> scores(SCORES_SIZE + 1);
    vector<int> sums(SCORES_SIZE + 1);

    for (int i = 1; i <= SCORES_SIZE; i++) {
        cin >> scores[i];
        sums[i] = sums[i - 1] + scores[i];

        if (i == SCORES_SIZE) {
            finalScore = sums[i];
        }
    }

    for (int i = 1; i <= SCORES_SIZE; i++) {
        if (sums[i] - GOLE_SCORE >= 0) {
            finalScore = GOLE_SCORE - sums[i - 1] < sums[i] - GOLE_SCORE ? sums[i - 1] : sums[i];
            break;
        }
    }

    cout << finalScore;

    return 0;
}