//Bài 1 

console.log('%c Bài 1','background: #EAFF7B; color: #000')

const array = [
    {
    gia: "3000",
    san_pham: "ao 3 lỗ",
    so_luong: 1
    },
    {
    gia: "12000",
    san_pham: "quan Đen",
    so_luong: 2
    },
    {
    gia: "3000",
    san_pham: "quan dài",
    so_luong: 5
    }
];

const total = array.reduce((curr, acc)=>{
    return Number(curr) + Number(acc.gia);
},0)
console.log('tong tien',total);

//Bài 2
console.log('%c Bài 2','background: #EAFF7B; color: #000')
const chuoiNumber = "12234534342";

function timesApear(times) {
    const newArray = times.split('');
    const arrayTwo = newArray.filter((e,i)=>{
        return e == 2;
    })
    return arrayTwo.length;
}

console.log('số lần xuất hiện số 2: ',timesApear(chuoiNumber));