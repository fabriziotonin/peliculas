import React from 'react';
import { Genres } from '../config'
import Modal from 'react-bootstrap/Modal'

const DetallePelicula = ({ title, overview, genre_ids, id, show, setShow }) => {

  const genres = genre_ids.map((genero) => (
    <span key={genero} className="badge badge-secondary ml-2">{Genres[genero]}</span>
  ))

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-content bg-dark border-success">
          <div className="modal-header">
            <h5 className="modal-title text-white" id="exampleModalLabel">{title}</h5>
            <button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-success">
            {overview}
          </div>
          <div>
            {genres}
          </div>
          <div className="modal-footer">
            <button onClick={handleClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </Modal>
    </>
  );
}
// return (
//   <div className="modal fade" id={'id' + id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div className="modal-dialog " role="document">
//       <div className="modal-content bg-dark">
//         <div className="modal-header">
//           <h5 className="modal-title text-white" id="exampleModalLabel">{title}</h5>
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body text-success">
//           {overview}
//         </div>
//         <div>
//           {genres}
//         </div>
//         <div className="modal-footer">
//           <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//           {/* <button type="button" className="btn btn-primary">Save changes</button> */}
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };

export default DetallePelicula;