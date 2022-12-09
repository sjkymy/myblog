let s1 = ["a", "b", "c"]
let s2 = ["com", "b", "d", "p", "c"]	
let answer = 0

for (let i = 0; i < s1.length; i++) {
    if (s2.includes('s1[i]')) {
        answer++
    }
}