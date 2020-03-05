export function addOptionElement(text, value, elementCreate, elementId)
{
    let option = document.createElement(elementCreate);
    option.text = text;
    option.value = value;
    let select = document.getElementById(elementId);

    select.appendChild(option);
}


