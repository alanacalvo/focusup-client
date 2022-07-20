{openModal && <NewSession closeModal={setOpenModal}/>}
{ timer.secondsRemaining === 0 
  ? <PostSessionForm />
  : <CountdownTimer />
}     