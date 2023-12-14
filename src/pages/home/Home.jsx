import React from 'react'
import './home.css'
import Product from '../../components/product/Product'

const Home = () => {
  return (
     <div className="home">
    
      <img className='home__image' src="https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?w=740&t=st=1701988828~exp=1701989428~hmac=3e8914995563a56f859c1b1dd86e4dd2b37f1fa2066ed82a2e6458d4cbd264d8" alt="" />
     
      <div className="home__row"> 
        <Product 
          id="1"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={45.4}
          rating={6}
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D "
        />
        <Product 
          id="2"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={78.0}
          rating={5}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xAA+EAACAQMDAQYDBAgEBwEAAAABAgMABBEFEiExBhMiQVFhFHGBMpGh8AcVIzNCUrHBYnLR4SQ0Q2OCkqIl/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAIxEAAgICAwACAwEBAAAAAAAAAAECEQMhEjFBBCIyUXETQv/aAAwDAQACEQMRAD8A8P6VIj1HWUWgIJBBrfdedQI+KJjk8s1NqisWn2RmOtYxRezcKjaPB6U0ZoWWL1EVbAre2sp7JNNGYrASDkVuuguawAy2lc8Gu5lYnNCRvtIo5H3JQegoCkUgc9aDm86Y3HnS+UdaCYWjhBXLV2OlaC5oWMaUVjDAohVAWuQvizjNZMLVBujOqPlqsECd9MGCFgvNK9D0uW+YdyM84A9K9O0Hsktvb77nmTGaW3ZlQoVQ9tuSIA46YqOCaK4It5IwCBtHFPL+L4diEAI6VX/g3+NV4z50TA0+gfBSd5t/Z/a5rpltWQBdmR1q2xRC/i7ic8+VUHtdpV3ol00kYLReftSZVKS+pTFJRdsKmt4imVK/SlN3GuOAOKWDWZwMEcVJFfLKfF1rnj/tD8jof+M/xIXkwxWopBkiipIgTuFRiPeePKrLKmQeKjhY8iuSCpypwR6UWIz3fQ1E43DmqpkpKjYvpQAOfvrKg21lMToDaH2qMxkeVMDHWu5yKNhoWlSPKtq2DRz2/FQNB6is6CSQye9MLa2lu9y28LSsqlmCjJAFKFVlbir92I093spcBlkupUhlkxgRRAbm59T0+vtU3jsrHLSKjLAynxIVyAeR5GoGTFe4a7pWmfASz3NuiYjJZ1ABCqOOap+k2XZ7tbOIreyn0pooBuIw6uc8tkf3FNVCuSZ55trpav8A2u/Rld6HZG/tr6G8tBjBHBqltpt4JI0+EmLSYCDYfET6UyJNAvvUkUxzgU4u+zN5aK4nkjSaKISSRSELtb+QHPibkcUjcMjbiMVmGgtxuTJoGYckVO0424oyXSdtpZ3TTMy3S5ASL7POOueTU0UaVCQ1tWqy9puyE3Z+zt55rjc0xGIXi2MAc4PU+n41X0j55FNaFpnIaugCTmiYrRpmCRqXZuiqMk1I1r3JKyAqwOCCKXkkM4MsfYW47qZRtz4q9dNwDZjaduR19K827B6arsJCBivQb2ER2xGcYFOmuwUCBreVCJCMg+dJbhVjnygGM0t1K6khc7Txn1oM6oSo3DmhYRwdR7q4BBwBT7V9OXXdELDG7Z6V53c3Zlxjg16p2JJl0pVkBORih6bw8KvtONrcPDIuGU/fQggKt6V6X+kvRRbXC3Ua4BOGqji3JPIqlWS6ejiCNiuCK4de6fgdacWcK9CKIm05HIIxioPBu0XjmdUxTBteE80PIoGaYzWRiyE6UK9q55xTRi0CUlLoA2H0rdGfDt61lUJgNSRgelQLKp60REVPQ0o1EwQEdK4ktxj/AGqVM+VdtkKcjyrGoDt7IzXUaKu7nJA8/wA9PrXrenaWsEFlo/QOPibxh5Ipzg/5m4+QNVTsFpiXeotdzqO4tl7xifXy+7k/UVZ9YnnTTe6tgRqvaGYRRfzRQj+mFOfmxp/BQWUXnbC11uZ7w2mlCQR2pCA7tn2j8j0ofsPLpWnaHfStdJJdqTJcJggqg4QDjof71P28u4OzfZm30SwIUd1twPJR1PzJ4++qlJbzabosGnqjPqOoMs0y5554ij/Hcfn7UGMhdqWt6h8Q7JNIrXT988ecqAfsrg8dMfhV80btlqmpaFO91BYQfq0qEvViwXcjG0L/ADeYboPQ1Tu0Wl2FjdxWcEkkl5Eiwyy8sJZ8cgAemQKdlrfSzpmkEn4W0DSXEg5E1z/GM+eGGAPagAGWa3sC663p04LncZIju3knnJJ6nPXPNZCdGvrN7ghrbB8MLAzGX0x9kD354rkadqF3I1xctIZp38ECk5z5Lx/SnCdnrTT1Z9XkkmmTl7S2P7vPk79F+XWhti7sqEmmWV44WC1aNycEREnJ9hTeDs1ffApaizuzCJO8G8EEHGOvpjyp9Zasu6aCCSLSYe5YxLaxbnkfoqlj4j8/al/6u12+dZJbe9lTIL7nKkjzwW6UVBjcjnXNMv8AXJIJtWgkd4YxGhXC+EdOnWktz2ajiwcXMXoGXP8AbNOdS0PVpLiS403TJre3OAsfeByvHrnPNC397qGlW1smb9ZSD8Qs6YTPkFBGD50HCwqbQr0uRdMubpUaOS4ki7uJ2fZtGctjPmQMCr72C7Mabqmi3952jCtGId6RP4XTcOHHQj2IqlvLZa1D317aGPYdpuYVwAcZ5/2yPamum2jCZe7vfCkWEZnJ7wDonHpQa4oyfJjjsXaPaO4J3JuODjHGad9oJpgm1FOD51DpGu2cCLDcxrHIONp4NWKC+0u/jG5kOegqcU36Wcoo8q1IuScgmlR8R64r2277LaddWxZNoyMjFeTdpLGOyvCkZBG4im4tCtpgcFvgq7Dwg5zXt3Y+0jOkxNHyMDpXnFrozX2gNJCw3hTxV2/RLeSSac1tODviJU5oRkroEotIYdtNBj1HSJlx4gvpXhjQGORkcYZTgivp6/jT4OUN02+dfO3aNYxrN13IG0P5VWyLQvRgtdtOcdfxoc5qJyaxqJ3uD0qFrjjFQOTULZo2agrvhW6C59a1Qs1CUZFdBj6mtYrk5HIoFAlJ5F+yxouyllubmOBV3NIwUUtVx9aO0a5itdQjnkGNoIUgdGPAP06/SskByPW9CtIk0izsIWBa7zLdMv8ADGv2h9ThflmptAYaprN/2luBi1gDWlhnoFX95J+GPpRarbXmkPFbSdytxB3YuIgNyoAec+1VTUu0UB7JvZaRaXC29q6287ohKqAOOR/N/b3pxQKWRe0naiW7ugfgbQd/KP8ACOET6/61rTJnafUO01zhmhcw2YPR52HJ/wDEcV3JaT6bpFto9uoOq6lIHnxz4yPCvyRfxzQPahxHLZ6BpWXS1Hw8P/clY+Nz8yevzrBBdKkRJbnW7gkx2ZKWxf8AimYZLfTk/PFWLsrp1w1lHPdIzz3Em6CA8kZGF4Pnj7h1qtapLb2xisIcSWWmLznpPMTkk/Nv/lVq86bqVwNDhvTGYL2/iPdKDkww5wX9i3l7YPnWNtug64MlhaTmx8UsX7O8vUPER/kQ+WPNv6Uu095RpjRXd1HZ6ZeyLlpFy0vpjPCg4+0fal8U0cdrLPOrtYRNsSNeUmlHTI6FQfvpTdXVxqFy91dMJJXGGx0PGOPpW/gvo1fW+4LRaRBDaRspV5U8cjc/a7w8+X4mgG1C9e4757qcuAHznOWUgKTnjjJ+uPWg7WEwJgMxUtxnoB6V1I8SPGJDhmbYntnyoO+IVphcl5dzO88tyxlMgZccHOPtEDiirfW79EEUj/Exc5hnHeByeOc/ToaWXE0VqhRyASSQuOpAPn+eTR2mQu+y8RUkESq+wk5JI6dOo4+6grSoL7sm1rRbG5ee3sbj4K4dUkaNuI5GOPCOuDwPyKrNo15o81xFeeEQkb4pGILHyI/sf7U5lZ5J2mYkSFt3B6H8/wBKlntl7Q2ZtpBm9t0LQT8uzDJ4Y+nzPH1pl1sV96Jna21qww8hD8lJAcEH/Xpke+aS6dDexyiIXRjnDsp3Nx0yuPXPNLdLuZdObErgRs5Uj+U/nP0NW7T+1EOjwzSSWENzcFlaEyYJjxw23PH4eQqbjTH5JrZxa9utV05ZLS8jb4iHKsDxg+9Ip7ibUJ3nmfcxJJFA9oNZfW9Ym1J1KvNgHcclscZJ8zjA+QA8qK0081StEr2WLSNXubOBoh9gjFWz9F9xOdYnJ/d9T86os0e2IOBXof6OoPhbI3Eg2mTxE+1eJ8ub+PlTT7PYwNZcO10Wf9IHaNNL0zu4jm4lBCL/AHrxKQF2LNyxOSasnarUn1bV5ZN5MaeFBnypKYuK9XG243I8yaSdIXtHUDpTGSPFDyR1QUAZKidaNeOoHWgYF21lTbKysErorBxXUq7XJHQ/hXPOKUejhkycipYo2JHUiuSCBR1hHuYb+BjzprAojTRNV1G0tp7KCYfDzIQUY/ZPt6V6Z2Pn0/TOyQngdJBCpe5XzaY9AR+fKvJkzG5Kipl1C5tMmBiN4wy58LfMVk9hlHRY118WGrTapMhmneJo4zn92zdWA9aV6ezW1tea85BZV7q09SzZBfHsM8+pNAJDd61fW9vbxkPMwjXHQE9T91NO0Wo//ox6VYOP1bp0YgC9Vcj7RI9SaZyoRRvoW6Np7atqWmaVuIe7nEkpXrtPXn1CAn616Rq5MyzNZlVknmFrbxqv7pFOxce2ATSDsBphj7RXuoZUi3sJWjUDkNtAH96stxcbIrFMBYrK0ldZEjBIPCgn16mstm5NFZ1e70ya2FlaWomNlEwRxht5JAyCcevQ+ZpLq3eQmWGy7txbptdu9B3EfaK8+LnPHpxjmikT9qspUGRG3Zxjnrjjy9qQahJeREtKpETybkdsHkDoD5/jQ4tO0a7WzqG+vLueKO3iTeqcqMJkDLFtxxjgGnVlGup3lhb3ReAG9iikkUfZJba3PTIzSSVLmzsbO8HeRPIWCSh8MV9Me9F2EEtlbJNINmJI5U5zkBlOcgYPQ9CflWe47MqTH3aHR5P19dQruHdStGXLqM+LjA6k9TxTjRLO5srRIpbkGUMx7xjsAX0z+etMu26d1r0Wo2zLsul3qRgjOP8AcVXNQ1xijQzTKMRgMsa87QQBnHvjk1PF9o36NLWiGfmV9i4UMeM54z61zaXVxYzu9moRCp3IwBB9z/N+feofi4VkaOQsjByniXgtgHGfkRUow4yvII9KpKKbv9CptKhH2utA08GoQQsgu15XHO8cHp69a1YQ/rBIgRiWE+LPmOh/DH3Uy1ePvNCuNqoFimWQMG8RPQ8enSl3ZEt+so42BO98EfPI/wBKL6FBL/TZbKV2Mf7MNgkDgUXpZ8Y9a9m7MdjNM1bTnnvJ3aZjgxcYUAY5HvVP7RdhG7PahdMb+COzWHvrffkvId2NgHryKEXKvsBpC+JFbYG6CrLLrCw6Z8Pb/vGXb/lFVe1fco9aNRc8mubL8THlyKc/Dox/Iljg4r04WPqfM9axk4qcLxXLCuoiBPHUDxUcwqNkoGFzx4oaaOmkiUJKgoGF+ysojYKytYSp43A5rSAZwakA29ajziTNGatWh4OtMnkQbeAaIjbdbhMeIV1gGEHkH5VqNc4KE5Ht1qCnsvLHq0TwvuUArhvMV3sEjbcVnARZYzlx0/3prpZ+IdC0Q2+vSqJe2SvVML0iR9Kt7mCLAluljMPQlkUtvx6HJFVwCIy3QV+6nyS8cy4J+R/1r0a07O6bqV+8zSyW8iQAB0KErnzGQdp4+0KqfbvTZrC5jN3EZNxIjvI8bZV8tw/hYfcaea5Rokm4u0W3shF3f61VQVkl059v0wT+FPdWGmnVxveIWR07Lm2ZufF/hGfSqb2N7Q2r6lptjIxE80L2zkKeCyEdfnim9laOqWksrLtuu8tdiyDcpxjn05XFMgWU22eVptmDIAD4YYyzdOOPT+1L77ur+PMcbs3IDZ588dM8Zx5euMZqyadqWoaG1xbWEr2skx/aqmC3HHJx9KEt7j9mViJXYcFcYwaR2nphQnmstQv+5SSO5nEKbEJj2YXy60RFpF0vilSJAvJHfLuwKLvL5YvCSXlxkK2eT+f6U0t7KSe2aaI7gMMFCkEjGSfp0pJY5S02NyrdAMMKpo1tdSXyMXkkijSSR1jTaBkk48OenkMnqAOUcl2vxMIubcGzjc52DcdhOSoYnkZ5zmnmrKBbbzHO0ew7hHMsajnqwKtu5xwMedJ9RtrnS7e2d5VdLld/ckHI4Bz9xHI86KhwjrZnLkyO81Ff1lPNpzOInBVC4yeRgken9femmk3ZcqCRIpX7KIwWE4GASerHHpj3PkktrZb6W2htdpup5CuzbhR6UxtLaSxv3tJ44RNHICWMrBiP8IBwQOeSDjJo8YzW0a2nobaxfCfs3cWroiiHlductkjqOn40q7FwG/7R2kIwC8yJyc/xVLrs4h0gRF2zcSglCuBtHmPUdKc/oisI5u09tcc93DI0mT6Kp/uwqiSSpE5Nt7PaLTsxFb2mzf3N0CStxbHa49BnzHscivK+3mp6hq1wtvKBcWun3DR/HwoVSYjqCOgIPB5I4r0jtnrV7aWRg07unuLv9ja4bDIx6sR5gDJ46Yqra5c2nZbsOYx4zcQd3EHOdykcMfdjlvupXKg6KNYqaZoOKg7N6dqGpNDGtr3bzKzxhm6gY59s5H30QfCWUjlTg0QGGo3asZ6iZqxjDXLHisJqN24rGOJWoOZqllagp3xQNZm8VlC763RowilXKgjr50PnLHNTFzjA86hK80EyslfQZZXZjOyTaVPTIo/Yxbcmzn0pI3NMtOu8rsZfs1zZ4OP2idODJy+sgl0ZcvjGeoX+tM9Hm7mYEIGDfbBPX0IxQiZkAPAzU1uWgkG8DZnhsfZpcOZN0x8uJ+FyuY4biKOSIbXIyzr/ABex5/3oS3htZ42s7pyI3O3bdjeh/wArdQfnSr4q5tXLB1aFjk9OKme7EnLpGo8nAHI+6u1UzhkmhLrOh3XZ+6S4tzmESBoJS2cMOQD91XOGH9eXkVzp0iQLfRfEoW42SAjcvzDfhzVYvbomwktWkElu3RGJPdnyKk+XtXHYzVxb3CafPcdzulEtrM3/AEZh6+x86RfWQz+0Sw65ZRXNk2tW8ggn3hLq1YYBf+I89Tnn5UhjBDvIU27wADnpj28/masKX+oSatdx39o8guE/4qGFMHYAAGXHoMc+fnmgNS01rfbc2rfEWcxLRSIS3gH83vii47tE7Qt/VIv59wYR7vD4XO7p1x6CrNY2bWVjHDLMWCDxySkgNnkA45GfnSm2je3s2ui7xysdkW04z/Nn1GM/hXNxqV1cKPiZ2lHAwxAX0GcYH1oKnb/Q3SoluFEsWV2LIrboiyhgp+RzVT1W0nLvLK8kkm59olIz3ajczE5x18vY/WxLOZJBH4Sx3E4YEAKCSfuFaZtyFfUemadSTWhaorUFk63MSySFF8BLx8lN4ypx+cVYdFiaGe3F8ZZwG3NCZQeeckEjgH0+fWp7e0upLRLiK2Pdlu6L7cAkfn6Uq1fUhBG9lZygzyAd9KceDrlVP5/CsnasL0Ba5cDU72VodohjOyGNBweecelex/oi0BLPQ5tRuQBu/ZRt6gHxn5buP/GvJ+xehPql+hYFYlOWcfwr5t8/IV672k1b4bs3YaTppFqLsd1B/wBuEDxOfYKDjPU/Os3QpXO0naNQ99robCR7rTTVJ4OOJJP7Ur0Xs3JqFnpv65uLiaWR+9EEj+CKFeu70HHr5N6UDaxR9odfjjRWTRtLQKo64RenHmT19yQKuN9cxWthcyXK7TNH+2UNyluDhYQf8RG3I64dvOk6GDNM1W20jQb7WO+ja8mburdBxtUZwwHpjkH5VWdN0+91DTrvWHaKCyQs4aTI4A5Ofc8AetdXEccWkfGasiPqGpjeNw4tbZSMso8icADzrjXtVvNZ7K2FjBbJYWXeYYK371F6YHXj+tBPYWtAbsM8MD7g5BrgtUSKscaogwigAAVvNOIdM3FQSPWSNQ7vWAalegLh6lmkoCeSsYzvKyh94rKxqFxNdDmoQa6BpLOgxhzWg5Qhl6itseKiPFN3piPTtD20u4+6/hBxyTTO1uo2RkKZDDBJHFVKF9jhvvprb3RIAG3APFcOTFwdo7sWXmqZYbe6EP7Blyp+wX8vY1p3FsCkqAwNwrD+Any+VLjeZUq5XafQcj5V2moN3LQTkuT+IqkMjqxJwV7J75J+5ACgxjkeEc1XrxCSSDtI8gMCizqdzaJ3HDwjONx5A9KGnmhulUxsI28wRin5vsRxj16Wns/2jW9txY393Jb3Ozuo7sHG9TxtemmixajY309q09vFG0e7u7gbo7gZ+zjz48+vzrzd4pYDl1BX1HINOtL7R3FrEtvcqtzaj/pyj7H+U+VWjNM55Y3Fl2v9S03W5WGoXAsdRRtkhZQY8gndyvU58/aoW7PzzL/wd1Z3CNJtUrMv2c8Egn8KRCTQr/DR3PwkwIO2YZU/UVu+0G7vbiWe0uLU94chYZlCj5AkU9Kie7Hr9npIo0nlubVpwrbomwgiJRvPPPXy8yPSltydOs1/4vUo2JjzstvGQ2fux5fWl1zoV68KRm3WOQNzJ3wOf/r84onS+xOq3GYooXbvcA4TCt8mbC/jWUa6M3YBfdomukW0tN9rZrk7Vc7mz158ugqLSdBlupWeRSkS+Jt2eF9Wx/Tqa9E0j9G0VhcQNq7ld742w5dh59ccfQGrbNpem6Rdi31G0uLbScB0mVCY2Y9RIwyVPTlsZ9eKEm10PCKl+TKr2O0uWZPjI7eddGhOWdB47jHnjrtHTjgZOOSTVV7Xdop9T1KaW3UrLcYtra3xgxwj28izfgBXpXbjUv1kbDs92fkiZbzA3xMNiRDr04A/sK8/v57S87aW9notlbtBZDuzcupy6qDvdjnpnP04of0V14ONDsotI0mODxM5xJMU+1I5wVC+5yCPmnvWLFFqmqSRXzqNL04mfUXT7DuBju1/wqAEX2FQ3Go95YvfWC3En7QwJLsOBKzEbiehJyW+bgcbaj1V10qxh0G0CvJG++6Kc75/5OOoT+tKxkiOfvu0mrTy3bGG3/eXTL0hiX7MY+Q4x6mg9T1D4663qvdQIoSCEHiNB0H59am1q6XTrNdEt3y4YPfSA/bk/kz/AIfP3pKkmalKVM6ccFWwsSVsvxQ++uWkxTwyWSyYmnZI7UPI9cyScULLLVSFGpnoGZqklkoSRqBqN5rKH7ysrGBFeuw1DA1IG4pGixLmuWzWgc1vOaydGo4yanglKkCoGHOaxT501KSET4uxvAd7eNsCiHhVuEOT60mhnboT0phHdFVyBXJPHJO0d2PIpLYRsV1KPGAw60snt2ic56dRzRct0HwTww9KkW6t3BSaJnOOofFPj5Ilk4y0BQzOh8nXzVulHLJbTFd1uVbzCnihFgkJ8GDmpBHKnEkfFGSi/TY8mTH5aGkNrp8x2ytLEfKiWsZYPHauHB9Rtpbb963ClmTzHWpotRngbZIPARjrg1zOOWDuLOpSw5FtUM4db1C02kWyblIIO4+VTP231K3Kju4vCwZTg5+WfKlbXe/yVh/Sopu5kXD4z6Bf71SPyMn/AESlghX1ZbrL9IVndSpLrkN88wYeKGRSn/qfL61bLLtlDrV2LbT+0DWt264ijnsX8X/rwcfPyrxi5s9jlrfxIR0864sbq5tZg9vLJFPHyro2GX610LJq0c7xu+LLRrvay4s9auW0yZGkbdBLNHB3YdOhCrnw555H3UqsNdjs7G9iisHWW5XaZQ+dq/yjPkaUyBmYs2ck5z61sSlUO44+lB5f0GOCi0alrFvfR2GjaRIVsrRQI2cFGuJm+05HlljgZ6ACm2tXtpoVzZWelpHcX1gC11et4i8xHOPXac/WvOQ+453VLFIyHKZwPLNZ3JA1GRYkfvlKsf2nXOepqNi0bYJoOCfeMg4aiRMHXEnXyqMZNfWRaST+0SZJvU1svmg5cxnIOa0s3rTuLW0Ksl6YRITigpmIJqfvARUEw4zVIyJzhfQI8lCzyYHWp5xxxSy4c7sVVMhVGd971lQVlYxsV0DxW6ygxkdIa7FZWUrGRh6VHWVlFCyNZI6UYhOwVlZRkaHpthjkVpWJkINZWUoz7CopGAPtTGI95D4gPSsrK5cq2deHoJ0n/n1i/gHOKa9obC3Fr3qrhj6Vqsqj6FK0F2cLW3AyPCKysqHpXw03BABOD71FIMNxWVlFdmfRBI7L0PWtRr3x8ZP0rKyrojIb2OkW0qqzNICfQj/Sl97GsFy6R5wrEc+xrKysnsm/xI87CNvFGEkqpNZWUZ9C4uyVCWBBoeQkNxWVlHGbL2bDGuwc9aysoSCuge4HFKbkeOtVlUiJMgrKyspxD//Z"
        />
        </div>
        <div className="home__row">
        <Product 
          id="3"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={99.9}
          rating={4}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gjdOYxgmSQKvoMlsRvU5VGsvEJ-v89nbGhGLAobJI_3L7mxWLwO3JCF6JQ&s"
        />
         <Product 
          id="4"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={100.8}
          rating={3}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4FwiJ11CCUo_36rbQST8Y1xmeJWfnHJdh4IsDDqHCJLo4h68zP2pOib0pQ&s"
        />
         <Product 
          id="1234322"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={44.0}
          rating={2}
          image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D"
        />
        </div>
        <div className="home__row">
        <Product 
          id="5"
          title=" A wristwatch is a watch with a strap which you wear round your wrist. 
          "
          price={45.8}
          rating={1}
          image= "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fHww"
        />
        </div>
     </div>
  )
}

export default Home;