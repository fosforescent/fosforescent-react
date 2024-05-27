import Main from '../components/fos-old'


if (typeof window !== 'undefined') {
    window.addEventListener('storage', () => {

        console.log('storage', localStorage.getItem('storeData'))
    })
}



export default Main