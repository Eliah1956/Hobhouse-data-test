var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HobhouseBoundary_1 = new ol.format.GeoJSON();
var features_HobhouseBoundary_1 = format_HobhouseBoundary_1.readFeatures(json_HobhouseBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HobhouseBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HobhouseBoundary_1.addFeatures(features_HobhouseBoundary_1);
var lyr_HobhouseBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HobhouseBoundary_1, 
                style: style_HobhouseBoundary_1,
                popuplayertitle: 'Hobhouse Boundary',
                interactive: true,
                title: '<img src="styles/legend/HobhouseBoundary_1.png" /> Hobhouse Boundary'
            });
var format_MUTAREURBANSUBURBS_2 = new ol.format.GeoJSON();
var features_MUTAREURBANSUBURBS_2 = format_MUTAREURBANSUBURBS_2.readFeatures(json_MUTAREURBANSUBURBS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUTAREURBANSUBURBS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUTAREURBANSUBURBS_2.addFeatures(features_MUTAREURBANSUBURBS_2);
var lyr_MUTAREURBANSUBURBS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUTAREURBANSUBURBS_2, 
                style: style_MUTAREURBANSUBURBS_2,
                popuplayertitle: 'MUTARE URBAN SUBURBS',
                interactive: true,
                title: '<img src="styles/legend/MUTAREURBANSUBURBS_2.png" /> MUTARE URBAN SUBURBS'
            });
var format_Waterlines_3 = new ol.format.GeoJSON();
var features_Waterlines_3 = format_Waterlines_3.readFeatures(json_Waterlines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterlines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterlines_3.addFeatures(features_Waterlines_3);
var lyr_Waterlines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterlines_3, 
                style: style_Waterlines_3,
                popuplayertitle: 'Waterlines',
                interactive: true,
                title: '<img src="styles/legend/Waterlines_3.png" /> Waterlines'
            });

lyr_OSMStandard_0.setVisible(true);lyr_HobhouseBoundary_1.setVisible(true);lyr_MUTAREURBANSUBURBS_2.setVisible(true);lyr_Waterlines_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HobhouseBoundary_1,lyr_MUTAREURBANSUBURBS_2,lyr_Waterlines_3];
lyr_HobhouseBoundary_1.set('fieldAliases', {'id': 'id', });
lyr_MUTAREURBANSUBURBS_2.set('fieldAliases', {'id': 'id', 'DMA': 'DMA', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_Waterlines_3.set('fieldAliases', {'id': 'id', 'material': 'material', 'Pipe Size': 'Pipe Size', });
lyr_HobhouseBoundary_1.set('fieldImages', {'id': 'TextEdit', });
lyr_MUTAREURBANSUBURBS_2.set('fieldImages', {'id': 'TextEdit', 'DMA': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', });
lyr_Waterlines_3.set('fieldImages', {'id': 'TextEdit', 'material': 'TextEdit', 'Pipe Size': 'TextEdit', });
lyr_HobhouseBoundary_1.set('fieldLabels', {'id': 'no label', });
lyr_MUTAREURBANSUBURBS_2.set('fieldLabels', {'id': 'inline label - always visible', 'DMA': 'inline label - always visible', 'auxiliary_': 'inline label - always visible', 'auxiliar_1': 'inline label - always visible', 'auxiliar_2': 'inline label - always visible', });
lyr_Waterlines_3.set('fieldLabels', {'id': 'inline label - always visible', 'material': 'inline label - always visible', 'Pipe Size': 'inline label - always visible', });
lyr_Waterlines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});