function solution(num_list) {
    let answer = [0,0];
    if(num_list.length < 1 || num_list.length > 100) return;
        
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] < 0 || num_list[i] > 1000) continue;
            
        num_list[i] % 2 == 0 ? answer[0] += 1 : answer[1] += 1;
    }
    return answer;
}