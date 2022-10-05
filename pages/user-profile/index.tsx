import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './UserProfile.module.scss'
import { getData, saveData } from '../../controller/Controler';

interface IGeo {
  lat: string,
  lng: string,
}
interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}
interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string,
}
export interface IUser {
  id: string,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: IAddress,
  company: ICompany,
  geo: IGeo
}

export default function UserProfile() {

  const router = useRouter();
  const [userId, setUserId] = useState(router.query.userId);
  const [user, setUser] = useState<IUser>()



  async function loadUser() {
    if (!userId) {
      setUserId(getData('last_user').id);

      return
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        saveData('last_user', data)
        setUser(data);
        console.log(data)
      }).catch((err) => {
        /**
         * Em caso de erro é disparadas essa exceção no terminal
         */
        console.error('Falha ao buscar usuário')
      });
  }

  async function load() {
    await loadUser();
  }

  useEffect(() => {
    
    load();
  }, [userId])

  return (
    <div className={styles.userProfileContainer}>
      <h1>Usuário</h1>
      <div className={styles.userProfileCentralContainer}>
        <div className={styles.imageContainer}>
          <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_568656.png&f=1&nofb=1&ipt=bed8e4960925d9c07fd2f757722b5df761bb495dfd69c4c3f74e63ec383ce71b&ipo=images" alt="" />
        </div>
        <div className={styles.mainInformationContainer}>
          <h1>{user?.name}</h1>
          <h2>{user?.email}</h2>
          <table>
            <tbody>

              <tr>
                <td><h3>Telefone</h3></td>
                <td>{user?.phone}</td>
              </tr>
              <tr>
                <td><h3>website</h3></td>
                <td>{user?.website}</td>
              </tr>
              <tr>
                <td><h3>Endereço</h3></td>
                <td>{user?.address.city}</td>
              </tr>
              <tr>
                <td><h3>Empresa</h3></td>
                <td>{user?.company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
