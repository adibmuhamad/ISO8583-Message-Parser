var message;
function addRow(label, value)
{
    return '<tr><td>'+label+'</td><td>'+value+'</td></tr>';
}
function parseMessage()
{
    message = document.getElementById('input').value;
    var iso = new ISO8583(message, 1);
    var data = iso.parseDataElement();

    var propertiesHTML = '<h3>Message Poperties</h3><table border="1"><thead><tr><td>Label</td><td>Value</td><tr></thead>';

    propertiesHTML += '<tbody>';

    propertiesHTML += addRow('MTI', iso.mti);

    propertiesHTML += addRow('ISO Version ID', iso.versionID);
    propertiesHTML += addRow('ISO Version', iso.version);
    propertiesHTML += addRow('Message Class ID', iso.messageClassID);
    propertiesHTML += addRow('Message Class', iso.messageClass);
    propertiesHTML += addRow('Message Function ID', iso.messageFunctionID);
    propertiesHTML += addRow('Message Function', iso.messageFunction);
    propertiesHTML += addRow('Message Origin ID', iso.messageOriginID);
    propertiesHTML += addRow('Message Origin', iso.messageOrigin);

    propertiesHTML += addRow('Bitmap', iso.bitmap);
    propertiesHTML += addRow('Message Length', iso.messageLength);
    propertiesHTML += addRow('Data Element Offset', iso.dataElementOffset);
    propertiesHTML += addRow('Data Element Length', iso.dataElementLength);

    propertiesHTML += '</tbody>';
    propertiesHTML += '</table>';


    document.getElementById('properties').innerHTML = propertiesHTML;

    var firstdata = data[0];
    var field = [];
    var i, i;
    for(i in firstdata)
    {
        field.push(i);
    }
    var dataHTML = '<h3>Data Elements</h3><table border="1"><thead><tr>';
    for(i in firstdata)
    {
        dataHTML += '<td>'+i+'</td>';
    }
    dataHTML += '</tr></thead><tbody>'
    for(i in data)
    {
        dataHTML += '<tr>';
        for(j in data[i])
        {
            dataHTML += '<td>'+data[i][j]+'</td>';
        }
        dataHTML += '</tr>';
    }
    dataHTML += '</tbody></table>'
    document.getElementById('data').innerHTML = dataHTML;
}
window.onload = function()
{
    document.getElementById('calc').addEventListener('click', function(e){
        parseMessage();
        e.preventDefault();
    });
}