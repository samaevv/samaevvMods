mods = ['fireCraft', 'StarCraft', 'Optifine', 'Jurastic world', 'builder mod']
query = 'I want to download a free mod for minecraft java edition without fore'
parts_query_3 = [] 
parts_query_2 = []
for (let i = 0; i <= query.length - 3; i++) {
    parts_query_3.push(query.slice(i, i + 3))
}
for (let i = 0; i <= query.length - 2; i++) {
    parts_query_2.push(query.slice(i, i + 2))
}
rank_dict = {}
for (let mod_name of mods) {
    rank_dict[mod_name] = [0, 0]
    for (let i = 0; i <= mod_name.length - 3; i++) {
        if (parts_query_3.includes(mod_name.slice(i, i + 3))) {
            rank_dict[mod_name][0] += 1
        }
    }
    for (let i = 0; i <= mod_name.length - 2; i++) {
        if (parts_query_2.includes(mod_name.slice(i, i + 2))) {
            rank_dict[mod_name][1] += 1
        }
    }
    rank_dict[mod_name] = 1.75 * rank_dict[mod_name][0] + rank_dict[mod_name][1]
}
const result_lst = []
for (let key in rank_dict) {
    result_lst.push([key, rank_dict[key]])
}
result_lst.sort((a, b) => {
    return b[1] - a[1]
})
const final_result = []
for (let i = 0; i < 3; i++) {
    final_result.push(result_lst[i][0])
}
console.log(final_result)