import React from 'react';
import warehouseImg from '../assets/Warehouse.jpeg'; 
import {
    CreditCard,
    Truck,
    HandCoins,
    Percent,
    Package,
    Headphones,
    CheckCircle,
} from 'lucide-react';

const features = [
    { icon: CreditCard, label: 'Payment Options' },
    { icon: Truck, label: 'Reliable & Fast Delivery' },
    { icon: HandCoins, label: 'Purchase Financing' },
    { icon: Percent, label: 'Competitive Pricing' },
    { icon: Package, label: 'Supplier Management' },
    { icon: Headphones, label: 'Dedicated Support' },
];

const blogCards = [
    {
        title: "Tradeling: Tips for Safe and Smart Bulk Buying",
        subtitle: "Optimise costs while improving procurement efficiency",
        date: "JAN 28, 2025",
        tags: ["Sourcing", "Budgeting", "Fulfillment"]
    },
    // ... (rest of the blogCards array remains the same)
];

const Enterprise = () => {
    const [hoveredCard, setHoveredCard] = React.useState(null);
    const [hoveredFeature, setHoveredFeature] = React.useState(null);

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            {/* Hero Section */}
            <div style={{
                backgroundColor: '#00527A',
                color: '#FFFFFF',
                padding: '80px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    width: '100%',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        maxWidth: '500px',
                        width: '100%',
                        marginBottom: '20px',
                        padding: '0 15px'
                    }}>
                        <h1 style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            Your trusted <span style={{ color: '#F28705' }}>sourcing partner</span> <br />
                            for all purchasing needs.
                        </h1>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.8',
                            marginBottom: '30px'
                        }}>
                            Unique to the region and the first of its kind, <strong style={{ color: '#F28705' }}>ULINKIT Enterprise</strong> is your go-to product sourcing partner. With over 7 million items in curated catalogues at competitive prices, we streamline sourcing, supplier management, and communication hassles. Serving all business departments, we take care of the heavy 'sourcing', so you don't have to.
                        </p>
                        <button
                            style={{
                                backgroundColor: '#F28705',
                                color: '#FFFFFF',
                                padding: '15px 30px',
                                borderRadius: '5px',
                                border: 'none',
                                fontSize: '16px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            REGISTER
                        </button>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        width: '100%',
                        maxWidth: '350px',
                        padding: '0 15px'
                    }}>
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            color: '#00527A',
                            borderRadius: '5px',
                            padding: '20px',
                            marginBottom: '10px',
                            width: '100%',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                        }}>
                            {/* Feature list items */}
                            {[
                                { icon: 'bi-list-check', text: 'Manage RFQs, Price Negotiations & LPOs' },
                                { icon: 'bi-file-earmark-text-fill', text: 'Contractual Pricing & Curated Catalogues' },
                                { icon: 'bi-person-check-fill', text: 'One Supplier, for all your purchasing needs' },
                                { icon: 'bi-gear-fill', text: 'Integrates with SAP, Oracle, and other ERPs' },
                                { icon: 'bi-credit-card-2-front-fill', text: 'Flexible payment terms' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '15px',
                                    transition: 'all 0.2s ease'
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi ${item.icon}`} viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                                        {/* SVG paths */}
                                    </svg>
                                    <span style={{ fontSize: '14px' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <p style={{ fontSize: '12px', color: '#B3E5FC', textAlign: 'right' }}>*For business use only</p>
                    </div>
                </div>
            </div>

            {/* Tailored Sourcing Section */}
            <div style={{
                maxWidth: '1200px',
                padding: '80px 20px',
                margin: '0 auto',
                textAlign: 'left'
            }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    lineHeight: '1.3'
                }}>
                    <span style={{ color: '#F28705' }}>Tailored sourcing solutions</span> for you and your business. One supplier, one contact.
                </h1>
            </div>

            {/* Streamline Section */}
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#0099cc',
                color: '#FFFFFF',
                padding: '60px 20px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        marginBottom: '40px'
                    }}>
                        <h1 style={{
                            fontSize: '36px',
                            fontWeight: 'bold',
                            marginBottom: '30px',
                            lineHeight: '1.3'
                        }}>
                            Streamline product sourcing with our<br /> comprehensive platform:
                        </h1>
                        <ul style={{
                            listStyleType: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {[
                                'FREE registration & access to procurement platform',
                                'One supplier, for all your purchasing needs',
                                'Consolidate all orders & payments in one place',
                                'Manage quotations, price negotiations, LPOs and more!',
                                'Expertly managed supplier network & access to 7 mill+ items',
                                'Contractual pricing & curated catalogues',
                                'Multiple payment options + credit finance',
                            ].map((text, index) => (
                                <li key={index} style={{
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
                                    padding: '15px 0',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <span style={{
                                        marginRight: '10px',
                                        color: '#F28705',
                                        fontWeight: 'bold'
                                    }}>✔</span> {text}
                                </li>
                            ))}
                        </ul>
                        <button style={{
                            marginTop: '30px',
                            padding: '12px 24px',
                            backgroundColor: '#F28705',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            alignSelf: 'flex-start'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            Register
                        </button>
                    </div>
                </div>
            </div>

            {/* Blog Cards Section */}
            <div style={{
                backgroundColor: '#00527a',
                color: '#FFFFFF',
                padding: '80px 20px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginBottom: '30px'
                    }}>
                        Latest Insights & Resources
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '20px'
                    }}>
                        {blogCards.map((card, index) => (
                            <div 
                                key={index} 
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#00527A',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
                                    boxShadow: hoveredCard === index ? '0 10px 20px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                    transition: 'color 0.2s ease',
                                    color: hoveredCard === index ? '#F28705' : '#00527A'
                                }}>{card.title}</h3>
                                <p style={{ fontSize: '14px', marginBottom: '10px' }}>{card.subtitle}</p>
                                <small style={{ fontSize: '12px', color: '#888' }}>{card.date}</small>
                                <div style={{ marginTop: '10px' }}>
                                    {card.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            fontSize: '12px',
                                            backgroundColor: '#F28705',
                                            color: '#fff',
                                            borderRadius: '4px',
                                            padding: '2px 8px',
                                            marginRight: '5px',
                                            display: 'inline-block',
                                            marginBottom: '5px'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div style={{
                padding: '80px 20px',
                backgroundColor: '#f8f9fa'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '60px'
                    }}>
                        We are committed to
                        <span style={{ color: '#F28705' }}> resolving the frustrations</span> faced in your business sourcing and buying operations.
                    </h1>
                    
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        padding: '20px 0'
                    }}>
                        {features.map(({ icon: Icon, label }, index) => (
                            <div 
                                key={index} 
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    position: 'relative',
                                    width: '160px',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredFeature === index ? 'scale(1.1)' : 'scale(1)'
                                }}
                                onMouseEnter={() => setHoveredFeature(index)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        border: '1px solid #6c757d',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: hoveredFeature === index ? '#F28705' : 'transparent'
                                    }}>
                                        <Icon style={{
                                            width: '32px',
                                            height: '32px',
                                            color: hoveredFeature === index ? '#FFFFFF' : '#343a40',
                                            transition: 'all 0.3s ease'
                                        }} />
                                    </div>
                                    <CheckCircle style={{
                                        width: '24px',
                                        height: '24px',
                                        color: '#28a745',
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '50%'
                                    }} />
                                </div>
                                <p style={{
                                    marginTop: '15px',
                                    color: '#343a40',
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    transition: 'color 0.3s ease',
                                    color: hoveredFeature === index ? '#F28705' : '#343a40'
                                }}>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '70vh',
                backgroundImage: `url(${warehouseImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF',
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}></div>
                <div style={{
                    position: 'relative',
                    maxWidth: '1200px',
                    width: '100%',
                    zIndex: 1
                }}>
                    <h1 style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '30px',
                        lineHeight: '1.3'
                      ,
                      color:'white'
                    }}>
                        <span style={{ color: '#F28705' }}>Save time & money</span> – there's no need to invest in a procurement solution!
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        lineHeight: '1.6',
                        marginBottom: '40px',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color:'white'
                    }}>
                        Partner with us and unlock significant benefits. Enjoy enhanced sourcing capabilities and receive complimentary access to our procurement solution software and dashboards, absolutely free of charge.
                    </p>
                    <button style={{
                        backgroundColor: '#F28705',
                        color: '#FFFFFF',
                        padding: '20px 40px',
                        borderRadius: '5px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        whiteSpace:'nowrap'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                    }}>
                        Get in touch
                    </button>
                </div>
            </div>

            {/* Footer Contact */}
            <div style={{
                backgroundColor: '#00527a',
                color: '#FFFFFF',
                padding: '40px 20px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 'normal'
                }}>
                    Have any question? Please reach out to a friendly customer service agent on: +971 44 910000 or business@tradeling.com
                </h2>
            </div>
        </div>
    );
};

export default Enterprise;