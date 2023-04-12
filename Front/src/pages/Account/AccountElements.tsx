import CircleIcon from '@mui/icons-material/Circle'
import { Button } from '../../components/button/Button'

//styles
import styles from './AccountElements.module.css'

interface IsettingsNavProp {
   settingsNav?: boolean
   setSettingsNav: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountElements = ({ setSettingsNav }: IsettingsNavProp) => {
   function handleSettingsClick() {
      setSettingsNav(true)
   }

   // all of these inputs are supposed to be dynamic obviously

   return (
      <>
         {/*flexbox / text / flexbox  */}
         <div className={styles['account-state']}>
            <div>
               <CircleIcon sx={{ fontSize: '500%' }} />
               <p>Ricky Matato</p>
            </div>

            <div>
               <p>69</p>
               <p>posts</p>
            </div>
            <div>
               <p>569</p>
               <p>followers</p>
            </div>
            <div>
               <p>558</p>
               <p>following</p>
            </div>
         </div>
         <div style={{ margin: 10 }}>
            <p>I like stuff, but also junk and some things</p>
            <p>rickymatato.com</p>
            <p>rickymatato@gmail.com</p>
         </div>

         <div
            style={{
               display: 'flex',
               gap: '10px',
               margin: '10px 20px 10px 5px',
            }}
         >
            <Button buttonText="Settings" onClick={handleSettingsClick} />

            <Button buttonText="Search" />
         </div>
      </>
   )
}
