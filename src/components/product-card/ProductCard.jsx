import React from 'react';
import Button from '../button';

const ProductCard = ({ 
  product, 
  showDescription = true, 
  showButton = true,
  buttonText = "Learn More",
  buttonVariant = "outline"
}) => {
  const {
    id,
    name,
    description,
    image,
    features = [],
    specifications = [],
    downloadFile = null,
    additionalFiles = []
  } = product;

  const handleDownload = (e, fileUrl = downloadFile) => {
    e.preventDefault();
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
      <div className="w-full h-48 md:h-52 overflow-hidden relative">
        <img 
          src={image || '/placeholder-product.jpg'} 
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{name}</h3>
        
        {showDescription && description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
        )}

        {features.length > 0 && (
          <ul className="mb-4 space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start">
                <span className="text-accent-500 font-bold mr-2 mt-0.5">✓</span>
                {feature}
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-sm text-gray-500 italic flex items-start">
                <span className="text-gray-500 font-bold mr-2 mt-0.5">+</span>
                +{features.length - 3} more features
              </li>
            )}
          </ul>
        )}

        {specifications.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Specifications:</h4>
            <ul className="space-y-1">
              {specifications.slice(0, 2).map((spec, index) => (
                <li key={index} className="text-xs text-gray-600">
                  <strong>{spec.name}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {showButton && (
          <div className="mt-auto pt-4 space-y-3">
            <Button 
              variant="outline" 
              size="medium" 
              className="w-full"
              onClick={() => window.location.href = `/product/${id}`}
            >
              View Details
            </Button>
            {downloadFile && (
              <Button 
                variant="primary" 
                size="medium" 
                className="w-full"
                onClick={handleDownload}
              >
                Download PDF
              </Button>
            )}
            {additionalFiles.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Additional Files:</p>
                {additionalFiles.map((file, index) => (
                  <Button 
                    key={index}
                    variant="outline" 
                    size="small" 
                    className="w-full text-xs"
                    onClick={(e) => handleDownload(e, file)}
                  >
                    {file.split('/').pop().replace('.pdf', '')}
                  </Button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
