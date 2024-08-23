ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([77.062451, 5.672715, 83.620923, 9.930231]);
var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SL_1 = new ol.format.GeoJSON();
var features_SL_1 = format_SL_1.readFeatures(json_SL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SL_1.addFeatures(features_SL_1);
var lyr_SL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SL_1, 
                style: style_SL_1,
                popuplayertitle: "SL",
                interactive: false,
                title: '<img src="styles/legend/SL_1.png" /> SL'
            });
var format_DSD_2 = new ol.format.GeoJSON();
var features_DSD_2 = format_DSD_2.readFeatures(json_DSD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DSD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DSD_2.addFeatures(features_DSD_2);
var lyr_DSD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DSD_2, 
                style: style_DSD_2,
                popuplayertitle: "DSD",
                interactive: true,
    title: 'DSD<br />\
    <img src="styles/legend/DSD_2_0.png" /> AMPARA<br />\
    <img src="styles/legend/DSD_2_1.png" /> ANURADHAPURA<br />\
    <img src="styles/legend/DSD_2_2.png" /> BADULLA<br />\
    <img src="styles/legend/DSD_2_3.png" /> BATTICALOA<br />\
    <img src="styles/legend/DSD_2_4.png" /> COLOMBO<br />\
    <img src="styles/legend/DSD_2_5.png" /> GALLE<br />\
    <img src="styles/legend/DSD_2_6.png" /> GAMPAHA<br />\
    <img src="styles/legend/DSD_2_7.png" /> HAMBANTOTA<br />\
    <img src="styles/legend/DSD_2_8.png" /> JAFFNA<br />\
    <img src="styles/legend/DSD_2_9.png" /> KALUTARA<br />\
    <img src="styles/legend/DSD_2_10.png" /> KANDY<br />\
    <img src="styles/legend/DSD_2_11.png" /> KEGALLE<br />\
    <img src="styles/legend/DSD_2_12.png" /> KILINOCHCHI<br />\
    <img src="styles/legend/DSD_2_13.png" /> KURUNEGALA<br />\
    <img src="styles/legend/DSD_2_14.png" /> MANNAR<br />\
    <img src="styles/legend/DSD_2_15.png" /> MATALE<br />\
    <img src="styles/legend/DSD_2_16.png" /> MATARA<br />\
    <img src="styles/legend/DSD_2_17.png" /> MONARAGALA<br />\
    <img src="styles/legend/DSD_2_18.png" /> MULLAITIVU<br />\
    <img src="styles/legend/DSD_2_19.png" /> NUWARAELIYA<br />\
    <img src="styles/legend/DSD_2_20.png" /> POLONNARUWA<br />\
    <img src="styles/legend/DSD_2_21.png" /> PUTTALAM<br />\
    <img src="styles/legend/DSD_2_22.png" /> RATNAPURA<br />\
    <img src="styles/legend/DSD_2_23.png" /> TRINCOMALEE<br />\
    <img src="styles/legend/DSD_2_24.png" /> VAVUNIYA<br />\
    <img src="styles/legend/DSD_2_25.png" /> <br />'
        });

lyr_ESRITerrain_0.setVisible(true);lyr_SL_1.setVisible(true);lyr_DSD_2.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_SL_1,lyr_DSD_2];
lyr_SL_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Surveys': 'Surveys', 'num of col': 'num of col', });
lyr_DSD_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DCODE': 'DCODE', 'DIST': 'DIST', 'CODE': 'CODE', 'DIVISEC': 'DIVISEC', 'Area': 'Area', });
lyr_SL_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', 'Surveys': 'TextEdit', 'num of col': 'TextEdit', });
lyr_DSD_2.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DCODE': 'Range', 'DIST': 'TextEdit', 'CODE': 'TextEdit', 'DIVISEC': 'TextEdit', 'Area': 'TextEdit', });
lyr_SL_1.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DCODE': 'hidden field', 'DIST': 'hidden field', 'CODE': 'hidden field', 'DIVISEC': 'hidden field', 'Surveys': 'hidden field', 'num of col': 'hidden field', });
lyr_DSD_2.set('fieldLabels', {'PROVINCE_N': 'hidden field', 'DCODE': 'hidden field', 'DIST': 'hidden field', 'CODE': 'hidden field', 'DIVISEC': 'no label', 'Area': 'hidden field', });
lyr_DSD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});