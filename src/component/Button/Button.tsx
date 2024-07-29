type Props = {
    text: string,
};

export const Button = (prop:Props)=>{
    const {text} = prop
    
    return<div>{text}</div>
}