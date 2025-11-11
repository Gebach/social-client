import { observer } from 'mobx-react-lite'
import InfoContainer from '../../features/InfoContainer/InfoContainer'
import { useContext } from 'react'
import { Context } from '../../main'
import { toJS } from 'mobx'

const UserProfile = observer(() => {
  const { store } = useContext(Context)
  const user = toJS(store.getUser())

  return (
    <div>
      <h1 className="text-center text-3xl">Hello {user.email}</h1>
      <InfoContainer obj={user} />
    </div>
  )
})

export default UserProfile
