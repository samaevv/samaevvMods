mods = [
  'No Fire Overlay',
  'Sodium',
  '3D Items',
  'Fabric Api',
  'AppleSkin'
]

function search(query){

    
    const query_lst3 = []
    const query_lst2 = []
    
    for(let i = 0; i <= query.length-3; i++){
        query_lst3.push(query.slice(i, i+3))
    }
    for(let i = 0; i <= query.length-2; i++){
        query_lst2.push(query.slice(i, i+2))
    }
    
    
    rank_dict = {}
    
    for(let mod of mods){
        rank_dict[mod] = [0, 0]
        for(let i = 0; i <= mod.length-3; i++){
            if(query_lst3.includes(mod.slice(i, i+3))){
                rank_dict[mod][0] += 1
            }
        }
    }
    for(let mod of mods){
        
        for(let i = 0; i <= mod.length-2; i++){
            if(query_lst2.includes(mod.slice(i, i+2))){
                rank_dict[mod][1] += 1
            }
        }
        rank_dict[mod] = 1.75 * rank_dict[mod][0] + rank_dict[mod][1]
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
    return final_result
}

const ModSearch = document.querySelector('.search')
const list = document.querySelector('.variants')
ModSearch.addEventListener('input', ()=>{
    const result = search(ModSearch.value)
    list.innerHTML = ''
    for (res of result){
        const new_element = document.createElement('li')
        new_element.innerHTML = res
        list.appendChild(new_element)
    }
})
ModSearch.addEventListener('click', ()=>{
    list.classList.remove('hidden')
})
ModSearch.addEventListener('focusout', ()=>{
    list.classList.add('hidden')
})    
    