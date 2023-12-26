function solution(start_num, end_num) {
    let counts = [];
    
    for(let i = start_num; i >= end_num; i--) {
        counts.push(i);
    }
    
    return counts;
}