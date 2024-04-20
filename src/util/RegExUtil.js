export default function splitString(inputStr){
    const characters = [];
    const regex = /[\s\S]/gu;

    let match;
    while ((match = regex.exec(inputStr)) !== null){
        characters.push(match[0]);
    }
    return characters;
}