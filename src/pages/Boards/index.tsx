import { AppBar } from '@/components/module'
import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Boards() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100dvh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Boards
