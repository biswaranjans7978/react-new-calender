import React from 'react'
import ImportanceCard from './ImportanceCard'
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from 'react-router-dom';



function Importance() {

    let importance=[
        {
            monthName:"ଜାନୁଆରୀ",
            monthDates:
            {
                date1:"ତା ୧",
                date2:"ତା ୪",
                date3:"ତା ୭",
                date4:"ତା ୧୦",
                date5:"ତା ୧୧",
                date6:"ତା ୧୨",
                date7:"ତା ୧୪",
                date8:"ତା ୧୫ ",
                date9:"ତା ୧୬ ",
                date10:"ତା ୨୦ ",
                date11:"ତା ୨୧ ",
                date12:"ତା ୨୩ ",
                date13:"ତା ୨୪ ",
                date14:"ତା ୨୫ ",
                date15:"ତା ୨୬ ",
                date16:"ତା ୨୯ ",
                date17:"ତା ୩୦  ",
            },
                monthFestives:
            {
                festive1:"ଇଂରାଜୀ ନବବର୍ଷ ସନ ୨୦୨୪ ମସିହା ପ୍ରବେଶ ଆରମ୍ଭ",
                festive2:"ପଠାଣି ସାମନ୍ତଙ୍କ ଜୟନ୍ତୀ",
                festive3:"ସଫଳା ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
                festive4:"ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା",
                festive5:"ବକୁଳ ଅମାବାସ୍ୟା, ଶ୍ରୀମନ୍ଦିରେ ଓ ଗୃହିଣାଂ ବକୁଳ ଲାଗି, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ, ଶରଣ ଆରମ୍ଭ ଓ ମହାପୁରୁଷ ବୁଦ୍ଧନାଥ ଦାସଙ୍କ ଜନ୍ମୋତ୍ସବ",
                festive6:"ଚନ୍ଦ୍ର ଦର୍ଶନ ପୂଜା ଓ ସ୍ଵାମୀ ବିବେକାନନ୍ଦଙ୍କ ଜୟନ୍ତୀ",
                festive7:"ନବାଙ୍କ ବେଢା, ଭୋଗି ଓ ମାସାନ୍ତ",
                festive8:"ଉତ୍ତରାୟଣ ମକର ସଂକ୍ରାନ୍ତି, ପୋଙ୍ଗଲ, ଶରଣ ଶେଷ ଓ ହ.ନି",
                festive9:"ବରଗଡ଼ରେ ଧନୁଯାତ୍ରା",
                festive10:"ଶାମ୍ବ ଦଶମୀ ଓ ସୂର୍ଯ୍ୟ ଦେବତାଙ୍କ ପୂଜା",
                festive11:"ସର୍ବ ସମ୍ମତ ପୁତ୍ରଦା ଏକାଦଶୀ, ରବିନାରାୟଣ ବ୍ରତ ଓ ହଳ ନିଷେଧ",
                festive12:"ନେତାଜୀ ସୁବାଷ ଚନ୍ଦ୍ର ବୋଷଙ୍କ ଜୟନ୍ତୀ",
                festive13:"ଶିବ ଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
                festive14:"ଦେବାଭିଷେକ ପୂର୍ଣିମା, ପୋୖଷ ପୂର୍ଣିମା, ମହୋଦଧି ଆରତୀ, ଗୁରୁ ପୂର୍ଣ୍ଣିମା, ଚନ୍ଦ୍ର ପୂଜା ଓ ଉପବାସ",
                festive15:"ମାଘ ବ୍ରତାରମ୍ଭଃ, ପୂଷ୍ୟା ଭିଷେକ, ରାଜା ଭିଷେକ ଓ ୭୫ତମ ସାଧାରଣତନ୍ତ୍ର ଦିବସ",
                festive16:"ସଙ୍କଟ ଚତୁର୍ଥୀ ବ୍ରତ",
                festive17:"ମହାତ୍ମାଗାନ୍ଧୀଙ୍କ ତିରୋଧାନ ଦିବସ",
            },
           monthFestiveImp:
           {
            imp1:"ଖ୍ରୀଷ୍ଟପୂର୍ବ 46 ବର୍ଷରେ କେସର 67 ଦିନ ଯୋଡିଥିଲେ ଯାହା ଦ୍ BC ାରା ଖ୍ରୀଷ୍ଟପୂର୍ବ 45 ରେ ନୂତନ ବର୍ଷ ଜାନୁଆରୀ 1 ରୁ ଆରମ୍ଭ ହୋଇପାରେ। ଜାନୁଆରୀ 1 ତାରିଖ ରୋମାନ୍ ଭଗବାନଙ୍କୁ ଆରମ୍ଭ କରିବାକୁ ମନୋନୀତ ହୋଇଥିଲା, ଜାନୁସ୍, ଯାହାର ଦୁଇଟି ଚେହେରା ଅଛି - ଗୋଟିଏ ଦେଖାଯାଉଛି | ଅତୀତକୁ ଏବଂ ଅନ୍ୟଟି ଭବିଷ୍ୟତକୁ ଫେରନ୍ତୁ |",
            imp2:"ପଠାଣି ସାମନ୍ତ ବା ମହାମହୋପାଧ୍ୟାୟ ସାମନ୍ତ ଚନ୍ଦ୍ରଶେଖର ସିଂହ ହରିଚନ୍ଦନ ମହାପାତ୍ର ଓଡ଼ିଶାର ନୟାଗଡ଼ର ଖଣ୍ଡପଡ଼ାରେ ୧୮୩୫ରେ ଜନ୍ମିତ ଜଣେ ଜ୍ୟୋତିର୍ବିଦ ଓ ପଣ୍ଡିତ ଥିଲେ ।[୧] ଉତ୍କଳର ପୁରପଲ୍ଲୀରେ ସେ ପଠାଣି ସାମନ୍ତ ନାମରେ ସୁପରିଚିତ ।[୨] ସୂର୍ଯ୍ୟ, ଚନ୍ଦ୍ର, ଗ୍ରହ ଆଦିଙ୍କର ଦୈନିକ ଓ ବାର୍ଷିକ ଆବର୍ତ୍ତନର ନିର୍ଭୁଲ ଗଣନା କରିବା, ସୂର୍ଯ୍ୟପରାଗ ଓ ଚନ୍ଦ୍ରଗ୍ରହଣର ସଠିକ୍ ସମୟ ନିର୍ଦ୍ଧାରଣ କରିବାରେ ସେ ପାରଙ୍ଗମ ଥିଲେ। ତାଙ୍କ ନାମରେ ପଠାଣି ସାମନ୍ତ ପଞ୍ଜିକା ମଧ୍ୟ ପ୍ରଚଳିତ ଯାହା ରାଶି, ଗ୍ରହ, ନକ୍ଷତ୍ର ଆଦିର ଅବସ୍ଥିତିକୁ ନେଇ ଭବିଷ୍ୟତ ଗଣନାରେ ସାହାଯ୍ୟ କରିଥାଏ ।",
            imp3:"ଆପଣଙ୍କ ମତାମତ  ",
            imp4:"ଆପଣଙ୍କ ମତାମତ",
            imp5:"",
            imp6:"",
            imp7:"",
            imp8:"",
            imp9:"",
            imp10:"",
            imp11:"",
            imp12:"",
            imp13:"",
            imp14:"",
            imp15:"",
            imp16:"",
            imp17:"",
            imp18:"",
            imp19:"",
            imp20:"",   
    
        }
        },
        {
            monthName:"ଫେବୃଆରୀ",
            monthDates:
            {
                date1:"ତା ୩",
                date2:"ତା ୬",
                date3:"ତା ୮",
                date4:"ତା ୯",
                date5:"ତା ୧୦",
                date6:"ତା ୧୧",
                date7:"ତା ୧୨",
                date8:"ତା ୧୩",
                date9:"ତା ୧୪",
                date10:"ତା ୧୬",
                date11:"ତା ୨୦",
                date12:"ତା ୨୨",
                date13:"ତା ୨୩",
                date14:"ତା ୨୪",
                date15:"ତା ୨୬",
            },
                monthFestives:
            {
                festive1:"ଅଷ୍ଟକା ଶ୍ରାଦ୍ଧ",
                festive2:"ଷଟ୍ ତିଳା ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
                festive3:"ରଟନ୍ତି ଚତୁର୍ଦ୍ଦଶୀ ଉପଵାସ, ରଟନ୍ତି କାଳିକା ପୂଜା, ସଵେ-ମେରାଜ(ପୂର୍ବ ରାତ୍ରି), ଶିଵଚତୁର୍ଦ୍ଦଶୀ ଉପଵାସ, ଵେଢା ପରିକ୍ରମା ଓ ଶରଣ ଆରମ୍ଭ ",
                festive4:"ତ୍ରିବେଣି ଅମାବାସ୍ଯା, ମା'ବିରଜା ଦେବୀଙ୍କ ଜନ୍ମୋତ୍ସଵ, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
                festive5:"ଶ୍ରୀ ଜୀଉଙ୍କ ପଦ୍ମ ବେଶ",
                festive6:"ଚନ୍ଦ୍ରଦର୍ଶନ ଓ ପୂଜା",
                festive7:"ଶରଣ ଶେଷ",
                festive8:"କୁମ୍ଭ ସଂକ୍ରାନ୍ତି, ବରଦା ଚତୁର୍ଥୀ ଓ ହଳ ନିଶେଧ",
                festive9:"ସରସ୍ୱତୀ ପୂଜା, ଶ୍ରୀ ପଞ୍ଚମୀ ଓ ବସନ୍ତୋତ୍ସବ",
                festive10:"ମାଘ ସପ୍ତମୀ, (କୋଣାର୍କ) ଚନ୍ଦ୍ରଭାଗା  ତୀର୍ଥେ ସ୍ନାନ, ଭୀଷ୍ମାଷ୍ଟମୀ ଓ ଶ୍ରୀମନ୍ଦିରେ ଜଗତସିଂହପୁର ମହାପୁରୁଷ ବୁଦ୍ଧନାଥ ଦାସଙ୍କ ଜନ୍ମୋତ୍ସବ",
                festive11:"ଭୈମୀ ଏକାଦଶୀ (ବଡ) ଉପବାସ, ବ୍ଯାସ ସରୋବର ମେଳା, ବରାହ ଦ୍ବାଦଶୀ ଓ ହଳ ନିଷେଧ",
                festive12:"ନିତ୍ଯାନନ୍ଦ ମହାପ୍ରଭୁଙ୍କ ଜନ୍ମୋତ୍ସବ ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
                festive13:"ଅଗ୍ନ୍ୟୁତ୍ସବ ଓ ଯୋରନ୍ଦା ମେଳା",
                festive14:"ମାଘ ପୂର୍ଣିମା, ମାଘ ବ୍ରତ ସମାପନ, ଶ୍ରୀମନ୍ଦିରେ ଗଜ ଉଦ୍ଧାରଣ ବେଶ, ଚନ୍ଦ୍ରପୂଜା ଓ ଉପବାସ",
                festive15:"ସବେ-ବରାତ୍(ପୂର୍ବରାତ୍ରି)",
            },
               monthFestiveImp:
               {
                imp1:"",
                imp2:"",
                imp3:"",
                imp4:"",
                imp5:"",
                imp6:"",
                imp7:"",
                imp8:"",
                imp9:"",
                imp10:"",
                imp11:"",
                imp12:"",
                imp13:"",
                imp14:"",
                imp15:"",
                imp16:"",
                imp17:"",
                imp18:"",
                imp19:"",
                imp20:"",
    
            }
            },
            {
                monthName:"ମାର୍ଚ୍ଚ",
                monthDates:
            {
                date1:"ତା ୬",
                date2:"ତା ୭",
                date3:"ତା ୮",
                date4:"ତା ୯",
                date5:"ତା ୧୦",
                date6:"ତା ୧୧",
                date7:"ତା ୧୨",
                date8:"ତା ୧୪",
                date9:"ତା ୧୯",
                date10:"ତା ୨୦",
                date11:"ତା ୨୧",
                date12:"ତା ୨୨",
                date13:"ତା ୨୩",
                date14:"ତା ୨୪",
                date15:"ତା ୨୫",
                date16:"ତା ୨୬",
                date17:"ତା ୨୯",
                date18:"ତା ୩୦",
                date19:"ତା ୩୧",
                
    
            },
                monthFestives:
            {
                festive1:"ସ୍ମାର୍ତ୍ତ ସମ୍ମତ ପଙ୍କୋଦ୍ଧାର ଏକାଦଶୀ ଉପବାସ, ଶରଣ ଆରମ୍ଭ ଓ ହ. ନି.,",
                festive2:"ସର୍ବ ବୈଷ୍ଣବ ସମ୍ମତ ଏକାଦଶୀ",
                festive3:"ମହାଶିବ ରତ୍ରି (ଜାଗର) ଓ ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ",
                festive4:"ବୈଷ୍ଣବ ସମ୍ମତ ମହାଶିବ ରାତ୍ରି, ଚନ୍ଦ୍ରକ୍ଷୟ, ନିଶିପାଳନ ଓ ହଳ ନିଷେଧ",
                festive5:"ଅମାବାସ୍ଯା, ସୂର୍ୟ୍ଯମହତୀ ସ୍ନାନ ଓ ଶରଣ ଶେଷ",
                festive6:"ଦ୍ୱିତୀୟାର ଚନ୍ଦ୍ରଦର୍ଶନ ପୂଜା ଓ ଉପବାସ",
                festive7:"ରମଜାନ ମାସ ଆରମ୍ଭ",
                festive8:"ମୀନ ସଂକ୍ରାନ୍ତି ଓ ଗୁରୁ ପଞ୍ଚମୀ ବ୍ରତ ଓ ହଳ ନିଷେଧ",
                festive9:"ଦୋଳ ଯାତ୍ରାରମ୍ଭଃ, ଫଗୁ ଦଶମୀ ଓ ଶ୍ରୀ ଜୀଉଙ୍କର ଚାଚେରୀ ବେଶ",
                festive10:"ପାପନାଶିନୀ (ଆମଦର୍କୀ) ଏକାଦଶୀ ଓ ହଳ ନିଷେଧ",
                festive11:"ସାମାନ୍ଯ ଗୋବିନ୍ଦ ଦ୍ବାଦଶୀ ସ୍ନାନ ଓ ସମ ଦିବସ",
                festive12:"ରାଷ୍ଟ୍ରିୟ ୧୯୪୬ ନବବର୍ଷ ଆରମ୍ଭ",
                festive13:"ଶିବଚତୁର୍ଦ୍ଦଶୀ ଉପବାସ ଓ ବେଢା",
                festive14:"ବରାହ ଦୋଳ, ରାଜାଗ୍ନି, ଓଳକଣା ମେଲଣ ଓ ପୂର୍ଣ୍ଣିମାର ଚନ୍ଦ୍ରପୂଜା",
                festive15:"ଦୋଳ ପୂର୍ଣ୍ଣିମା, ଶ୍ରୀ ଚୈତନ୍ୟ ଦେବଙ୍କର ଜନ୍ମୋତ୍ସବ ଓ ଶ୍ରୀ ଜୀଉଙ୍କର ରାଜ ବେଶ",
                festive16:"ହୋଲି ଉତ୍ସବ",
                festive17:"ଗୁଡ ଫ୍ରାଇଡ଼େ",
                festive18:"ପଞ୍ଚୁଦୋଳ",
                festive19:"ସ୍କନ୍ଧ ଷଷ୍ଠୀ",
                festive20:"",
    
            },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ମଇ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ଜୁନ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ଜୁଲାଇ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ଅଗଷ୍ଟ",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ସେପ୍ଟେମ୍ବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ଅକ୍ଟୋବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ନଭେମ୍ୱର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        {
            monthName:"ଡିସେମ୍ବର",
            monthDates:
        {
            date1:"ତା ୧",
            date2:"ତା ୪",
            date3:"ତା ୭",
            date4:"",
            date5:"",
            date6:"",
            date7:"",
            date8:"",
        },
            monthFestives:
        {
            festive1:"new year",
            festive2:"",
            festive3:"",
            festive4:"",
        },
           monthFestiveImp:
           {
            imp1:"its a holiday",
            imp2:"",
            imp3:"",
            imp4:"",
        }
        },
        
   
    ]
    return(
    <>
    <h1 className=" h-14 pt-4 text-white text-center text-2xl  bg-[url('https://www.shutterstock.com/image-vector/indian-tribal-painting-warli-260nw-2429804279.jpg')]   ">ପର୍ବପର୍ବାଣୀ ଓ ଛୁଟିଦିନ</h1>
    <div>
        <button className=' text-2xl absolute pt-2'><Link to="/monthlyfestive"><MdOutlineArrowBack /></Link></button>
        
    </div>
    <div className=' w-full   '>
       {
        importance.map((data)=>{
            return <ImportanceCard data={data}/>
        })
       }
    </div>

    </>
  )
}

export default Importance