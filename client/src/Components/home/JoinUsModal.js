import React from 'react'

function JoinUsModal() {
  return (
    <>       
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Recipient:</label>
                        <input type="text" className="form-control" id="recipient-name"/>
                    </div>
                    <div className="mb-3">
                        <label for="recipient-name" className="col-form-label">Recipient:</label>
                        <input type="text" className="form-control" id="recipient-name"/>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
        </div>
        <script>
            
        </script>
    </> 
  )
}

export default JoinUsModal;