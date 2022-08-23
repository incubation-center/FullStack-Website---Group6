import { motion } from "framer-motion";

function RecipeTags ()
{
  return (
    <div className="flex flex-col items-start">
      {/* Cuisine */ }
      <motion.label className="swap" animate={ { scale: 1.1 } } transition={ { type: "spring", stiffness: 400, damping: 17 } }>
        {/* <!-- this hidden checkbox controls the state --> */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Badge */ }
        <div className="badge badge-outline dark:badge-accent swap-off gap-5 p-5 my-5">
          <svg className="color: rgb(0, 0, 0); w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 28.0001C4.44772 28.0001 4 28.4478 4 29.0001C4 29.5524 4.44772 30.0001 5 30.0001H8C8 34.4184 11.5817 38.0001 16 38.0001H32C36.4183 38.0001 40 34.4184 40 30.0001H43C43.5523 30.0001 44 29.5524 44 29.0001C44 28.4478 43.5523 28.0001 43 28.0001H5Z" fill="#000000" />
            <path fillRule="evenodd" clipRule="evenodd" d="M23.1053 10.0535C23.1053 10.0535 23.1056 10.0529 24 10.5001C24.8944 10.9473 24.8947 10.9468 24.8947 10.9468L24.893 10.9502L24.8812 10.9749C24.87 10.9983 24.8526 11.0355 24.8305 11.0849C24.7861 11.184 24.7229 11.3312 24.6521 11.5153C24.5094 11.8864 24.3413 12.3927 24.2306 12.9462C23.9948 14.125 24.0825 15.1684 24.7071 15.793C26.0825 17.1684 25.9948 19.125 25.7306 20.4462C25.5913 21.1427 25.3844 21.7614 25.2146 22.2028C25.1292 22.425 25.0517 22.6058 24.9945 22.7334C24.9659 22.7972 24.9423 22.848 24.9251 22.8841L24.9044 22.9271L24.898 22.9402L24.8958 22.9445L24.895 22.9461C24.895 22.9461 24.8944 22.9473 24 22.5001C23.1056 22.0529 23.1053 22.0534 23.1053 22.0534L23.107 22.05L23.1188 22.0253C23.13 22.0019 23.1474 21.9647 23.1695 21.9153C23.2139 21.8162 23.2771 21.669 23.3479 21.4849C23.4906 21.1138 23.6587 20.6075 23.7694 20.054C24.0052 18.8752 23.9175 17.8318 23.2929 17.2072C21.9175 15.8318 22.0052 13.8752 22.2694 12.554C22.4087 11.8575 22.6156 11.2388 22.7854 10.7974C22.8708 10.5752 22.9483 10.3944 23.0055 10.2668C23.0341 10.203 23.0577 10.1523 23.0749 10.1162L23.0956 10.0731L23.102 10.0601L23.1042 10.0557L23.1053 10.0535ZM24.8951 10.9459L24.8947 10.9468L24.8951 10.9459Z" fill="#000000" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1707 12.4412C15.1707 12.4412 15.1712 12.4406 16 13.0001C16.8288 13.5596 16.8292 13.5591 16.8292 13.5591L16.83 13.5579L16.8292 13.5591L16.8169 13.5781C16.8054 13.596 16.787 13.6252 16.7632 13.6643C16.7157 13.7429 16.6475 13.8606 16.5711 14.0078C16.416 14.3066 16.2377 14.7062 16.1217 15.1358C15.8808 16.028 15.9674 16.7315 16.5952 17.1966C18.2174 18.3982 18.1308 20.1947 17.8092 21.3858C17.6439 21.9979 17.4003 22.5357 17.2039 22.914C17.1046 23.1054 17.0145 23.2612 16.9478 23.3714C16.9144 23.4266 16.8867 23.4707 16.8663 23.5024C16.8561 23.5183 16.8478 23.5311 16.8415 23.5406L16.8335 23.5526L16.8308 23.5567L16.8297 23.5583C16.8297 23.5583 16.8288 23.5596 16 23.0001C15.1712 22.4406 15.1708 22.4412 15.1708 22.4412L15.1831 22.4221C15.1946 22.4042 15.213 22.3751 15.2368 22.3359C15.2843 22.2573 15.3525 22.1397 15.4289 21.9924C15.584 21.6937 15.7623 21.294 15.8783 20.8644C16.1192 19.9722 16.0326 19.2687 15.4048 18.8037C13.7826 17.602 13.8692 15.8055 14.1908 14.6144C14.3561 14.0024 14.5997 13.4645 14.7961 13.0862C14.8954 12.8949 14.9855 12.7391 15.0522 12.6288C15.0856 12.5736 15.1133 12.5295 15.1337 12.4978C15.1439 12.482 15.1522 12.4692 15.1585 12.4596L15.1665 12.4476L15.1692 12.4435L15.1707 12.4412Z" fill="#000000" />
            <path fillRule="evenodd" clipRule="evenodd" d="M32.1707 12.4412C32.1707 12.4412 32.1712 12.4406 33 13.0001C33.8288 13.5596 33.8292 13.5591 33.8292 13.5591L33.83 13.5579L33.8292 13.5591L33.8169 13.5781C33.8054 13.596 33.787 13.6252 33.7632 13.6643C33.7157 13.7429 33.6475 13.8606 33.5711 14.0078C33.416 14.3066 33.2377 14.7062 33.1217 15.1358C32.8808 16.028 32.9674 16.7315 33.5952 17.1966C35.2174 18.3982 35.1308 20.1947 34.8092 21.3858C34.6439 21.9979 34.4003 22.5357 34.2039 22.914C34.1046 23.1054 34.0145 23.2612 33.9478 23.3714C33.9144 23.4266 33.8867 23.4707 33.8663 23.5024C33.8561 23.5183 33.8478 23.5311 33.8415 23.5406L33.8335 23.5526L33.8308 23.5567L33.8297 23.5583C33.8297 23.5583 33.8288 23.5596 33 23.0001C32.1712 22.4406 32.1708 22.4412 32.1708 22.4412L32.1831 22.4221C32.1946 22.4042 32.213 22.3751 32.2367 22.3359C32.2843 22.2573 32.3525 22.1397 32.4289 21.9924C32.584 21.6937 32.7623 21.294 32.8783 20.8644C33.1192 19.9722 33.0326 19.2687 32.4048 18.8037C30.7826 17.602 30.8692 15.8055 31.1908 14.6144C31.3561 14.0024 31.5997 13.4645 31.7961 13.0862C31.8954 12.8949 31.9855 12.7391 32.0522 12.6288C32.0856 12.5736 32.1133 12.5295 32.1337 12.4978C32.1439 12.482 32.1522 12.4692 32.1585 12.4596L32.1665 12.4476L32.1692 12.4435L32.1707 12.4412Z" fill="#000000" />
          </svg>
          Cuisine
        </div>
        {/* Cuisine From */ }
        <div className="badge text-accent dark:outline swap-on gap-5 p-5 my-5" >
          <svg className="color: white w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 28.0001C4.44772 28.0001 4 28.4478 4 29.0001C4 29.5524 4.44772 30.0001 5 30.0001H8C8 34.4184 11.5817 38.0001 16 38.0001H32C36.4183 38.0001 40 34.4184 40 30.0001H43C43.5523 30.0001 44 29.5524 44 29.0001C44 28.4478 43.5523 28.0001 43 28.0001H5Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M23.1053 10.0535C23.1053 10.0535 23.1056 10.0529 24 10.5001C24.8944 10.9473 24.8947 10.9468 24.8947 10.9468L24.893 10.9502L24.8812 10.9749C24.87 10.9983 24.8526 11.0355 24.8305 11.0849C24.7861 11.184 24.7229 11.3312 24.6521 11.5153C24.5094 11.8864 24.3413 12.3927 24.2306 12.9462C23.9948 14.125 24.0825 15.1684 24.7071 15.793C26.0825 17.1684 25.9948 19.125 25.7306 20.4462C25.5913 21.1427 25.3844 21.7614 25.2146 22.2028C25.1292 22.425 25.0517 22.6058 24.9945 22.7334C24.9659 22.7972 24.9423 22.848 24.9251 22.8841L24.9044 22.9271L24.898 22.9402L24.8958 22.9445L24.895 22.9461C24.895 22.9461 24.8944 22.9473 24 22.5001C23.1056 22.0529 23.1053 22.0534 23.1053 22.0534L23.107 22.05L23.1188 22.0253C23.13 22.0019 23.1474 21.9647 23.1695 21.9153C23.2139 21.8162 23.2771 21.669 23.3479 21.4849C23.4906 21.1138 23.6587 20.6075 23.7694 20.054C24.0052 18.8752 23.9175 17.8318 23.2929 17.2072C21.9175 15.8318 22.0052 13.8752 22.2694 12.554C22.4087 11.8575 22.6156 11.2388 22.7854 10.7974C22.8708 10.5752 22.9483 10.3944 23.0055 10.2668C23.0341 10.203 23.0577 10.1523 23.0749 10.1162L23.0956 10.0731L23.102 10.0601L23.1042 10.0557L23.1053 10.0535ZM24.8951 10.9459L24.8947 10.9468L24.8951 10.9459Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.1707 12.4412C15.1707 12.4412 15.1712 12.4406 16 13.0001C16.8288 13.5596 16.8292 13.5591 16.8292 13.5591L16.83 13.5579L16.8292 13.5591L16.8169 13.5781C16.8054 13.596 16.787 13.6252 16.7632 13.6643C16.7157 13.7429 16.6475 13.8606 16.5711 14.0078C16.416 14.3066 16.2377 14.7062 16.1217 15.1358C15.8808 16.028 15.9674 16.7315 16.5952 17.1966C18.2174 18.3982 18.1308 20.1947 17.8092 21.3858C17.6439 21.9979 17.4003 22.5357 17.2039 22.914C17.1046 23.1054 17.0145 23.2612 16.9478 23.3714C16.9144 23.4266 16.8867 23.4707 16.8663 23.5024C16.8561 23.5183 16.8478 23.5311 16.8415 23.5406L16.8335 23.5526L16.8308 23.5567L16.8297 23.5583C16.8297 23.5583 16.8288 23.5596 16 23.0001C15.1712 22.4406 15.1708 22.4412 15.1708 22.4412L15.1831 22.4221C15.1946 22.4042 15.213 22.3751 15.2368 22.3359C15.2843 22.2573 15.3525 22.1397 15.4289 21.9924C15.584 21.6937 15.7623 21.294 15.8783 20.8644C16.1192 19.9722 16.0326 19.2687 15.4048 18.8037C13.7826 17.602 13.8692 15.8055 14.1908 14.6144C14.3561 14.0024 14.5997 13.4645 14.7961 13.0862C14.8954 12.8949 14.9855 12.7391 15.0522 12.6288C15.0856 12.5736 15.1133 12.5295 15.1337 12.4978C15.1439 12.482 15.1522 12.4692 15.1585 12.4596L15.1665 12.4476L15.1692 12.4435L15.1707 12.4412Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M32.1707 12.4412C32.1707 12.4412 32.1712 12.4406 33 13.0001C33.8288 13.5596 33.8292 13.5591 33.8292 13.5591L33.83 13.5579L33.8292 13.5591L33.8169 13.5781C33.8054 13.596 33.787 13.6252 33.7632 13.6643C33.7157 13.7429 33.6475 13.8606 33.5711 14.0078C33.416 14.3066 33.2377 14.7062 33.1217 15.1358C32.8808 16.028 32.9674 16.7315 33.5952 17.1966C35.2174 18.3982 35.1308 20.1947 34.8092 21.3858C34.6439 21.9979 34.4003 22.5357 34.2039 22.914C34.1046 23.1054 34.0145 23.2612 33.9478 23.3714C33.9144 23.4266 33.8867 23.4707 33.8663 23.5024C33.8561 23.5183 33.8478 23.5311 33.8415 23.5406L33.8335 23.5526L33.8308 23.5567L33.8297 23.5583C33.8297 23.5583 33.8288 23.5596 33 23.0001C32.1712 22.4406 32.1708 22.4412 32.1708 22.4412L32.1831 22.4221C32.1946 22.4042 32.213 22.3751 32.2367 22.3359C32.2843 22.2573 32.3525 22.1397 32.4289 21.9924C32.584 21.6937 32.7623 21.294 32.8783 20.8644C33.1192 19.9722 33.0326 19.2687 32.4048 18.8037C30.7826 17.602 30.8692 15.8055 31.1908 14.6144C31.3561 14.0024 31.5997 13.4645 31.7961 13.0862C31.8954 12.8949 31.9855 12.7391 32.0522 12.6288C32.0856 12.5736 32.1133 12.5295 32.1337 12.4978C32.1439 12.482 32.1522 12.4692 32.1585 12.4596L32.1665 12.4476L32.1692 12.4435L32.1707 12.4412Z" fill="white" />
          </svg>
          Southern & Soul Food
        </div>
      </motion.label>


      {/* Meal Time */ }
      <motion.label className="swap" animate={ { scale: 1.1 } } transition={ { type: "spring", stiffness: 400, damping: 17 } }>
        {/* <!-- this hidden checkbox controls the state --> */ }
        <input type="checkbox" style={ { opacity: 0 } } />
        {/* Badge */ }
        <div className="badge badge-outline dark:badge-accent swap-off gap-5 p-5 my-5">
          <svg className="color: rgb(0, 0, 0); w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256">
            <path d="M212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM127.9,78.7l-8-48a8,8,0,1,0-15.8,2.6L110.6,72H92V32a8,8,0,0,0-16,0V72H57.4l6.5-38.7a8,8,0,1,0-15.8-2.6l-8,48h0A4.9,4.9,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a4.9,4.9,0,0,0-.1-1.2Z" fill="#000000" />
          </svg>
          Meal Time
        </div>
        {/* Meal Time Types */ }
        <div className="badge text-accent dark:outline swap-on gap-5 p-5 my-5">
          <svg className="color: white w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256">
            <path d="M212,32V224a8,8,0,0,1-16,0V168H148a8.2,8.2,0,0,1-6-2.7,8.1,8.1,0,0,1-2-6.2,412.8,412.8,0,0,1,11.8-59.3c12-42.4,28.7-67.8,49.5-75.3A7.9,7.9,0,0,1,212,32ZM127.9,78.7l-8-48a8,8,0,1,0-15.8,2.6L110.6,72H92V32a8,8,0,0,0-16,0V72H57.4l6.5-38.7a8,8,0,1,0-15.8-2.6l-8,48h0A4.9,4.9,0,0,0,40,80a44.1,44.1,0,0,0,36,43.3V224a8,8,0,0,0,16,0V123.3A44.1,44.1,0,0,0,128,80a4.9,4.9,0,0,0-.1-1.2Z" fill="white" />
          </svg>
          Breakfast
        </div>
      </motion.label>
    </div>
  )
}

export default RecipeTags;