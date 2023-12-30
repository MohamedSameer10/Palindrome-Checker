function palindromeChecker()
{

    
    const container = document.querySelector(".container")

    container.classList.add("animate")
    const user_input = document.querySelector("#user_input")
    const user_result = document.querySelector("#result")
    user_result.classList.add("result")
    const user_value = user_input.value
    const array = user_value.split('')
    
    const not_reversed_string = array.join()
    const arr_rev = array.reverse() //reverse method is reversed array after if we call array then it gives reversed array
    const reversed_string = arr_rev.join()

    
    if( document.querySelector("input").value == ""){
        user_result.innerHTML = `<span style = "color:yellow;">Please Enter The Value</span>`
        container.append(user_result)
    }

   else{
    if(not_reversed_string===reversed_string){
        user_result.innerHTML = `Given element is in palindrome`
    }
    else{
        user_result.innerHTML = `<span>Given element is not in palindrome</span>`
    }
   }
}