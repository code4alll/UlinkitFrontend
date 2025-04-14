import React, { useEffect, useRef } from 'react';
import empty from '../../../assets/empty.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ArchiveIcon from '@mui/icons-material/Archive';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ActionCard = ({ icon, title, description, onClick, learnMore }) => (
  <section onClick={onClick} className="productflex">
    <div className="flexcol big-svg">{icon}</div>
    <div className="flexcol-start" style={{ gap: '10px' }}>
      <h1 className="heading3">{title}</h1>
      <h2 className="descrip2">{description}</h2>
      <div className="flex small-svg">
        <TipsAndUpdatesIcon />&nbsp;&nbsp;
        <div onClick={learnMore} className='download-btn'>Learn more</div>
      </div>
    </div>
  </section>
);

const AddMulti = () => {
  const navigate = useNavigate();

  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  }, []);

  // Navigation handlers
  const upload = (e) => {
    e.stopPropagation();
    navigate('/seller-dashboard/upload-products-bulk');
  };
  const edit = (e) => {
    e.stopPropagation();
    navigate("/seller-dashboard/edit-products-bulk");
  };
  const archive = (e) => {
    e.stopPropagation();
    navigate("/seller-dashboard/archive-products");
  };
  const learnMore = (e) => {
    e.stopPropagation();
    navigate('/guidelines');
  };
  const startUpload = () => {
    navigate('/seller-dashboard/upload-products-bulk');
  };

  return (
    <div className='flexcol seller-home-cont' style={{ gap: '20px' }} tabIndex={0} ref={scrollRef}>
      <Helmet>
        <title>Add Multiple Products | Ulinkit - Bulk Upload Your Inventory</title>
        <meta name="description" content="Easily add multiple products to your Ulinkit store in bulk. Streamline your inventory management and quickly update your product listings with our efficient upload tools." />
        <link rel="canonical" href="https://www.ulinkit.com/seller-dashboard/add-products-bulk" />
      </Helmet>

      <h1 className="heading">Add Multiple Products</h1>
      <h2 className="descrip2">Use the upload center to upload/edit products and images</h2>

      <article className="perfect-grid-flex">
        <ActionCard
          icon={<CloudUploadIcon />}
          title="Upload multiple products"
          description="Used for uploading multiple products at a time via one or several template files"
          onClick={upload}
          learnMore={learnMore}
        />
        <ActionCard
          icon={<EditNoteIcon />}
          title="Edit multiple products"
          description="Use this option to update all or selected products by using our excel template"
          onClick={edit}
          learnMore={learnMore}
        />
        <ActionCard
          icon={<ArchiveIcon />}
          title="Archive multiple products"
          description="Use this option to archive products by using excel template"
          onClick={archive}
          learnMore={learnMore}
        />
      </article>

      <p className="heading">Upload List</p>

      {/* Upload history section */}
      <article className="productlist">
        <img src={empty} className='productlist-img' alt="empty box" />
        <h1 className="heading">Upload your products</h1>
        <h2 className="descrip2">This is where you’ll upload your products and see the upload history</h2>
        <button
          onClick={startUpload}
          className='btn box2 flex'
          style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)', cursor: 'pointer' }}
        >
          <div className="heading2">Start Your Upload</div>
        </button>
      </article>

      {/* Future Upload History Table (placeholder) */}
      <div className="upload-history">
        <h2 className="heading3">Upload History</h2>
        <p className="descrip2">No uploads yet. Once you upload, the history will appear here.</p>
        {/* You can replace this section with real table when backend is ready */}
      </div>
    </div>
  );
};

export default AddMulti;
