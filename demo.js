// Tạo đoạn code anonymous tạo plug-in kinh điển


(function($){
    var reviewPlugin = this;
    // Các hàm xử lý ở đây
    $.fn.reviewPlugin = function (){
        console.log("Plug-in loaded");
    }

    // đọc ảnh từ img data url 
    reviewPlugin.readImageData = function (file, successCallback){
        var reader = new FileReader();
        reader.onload = function (event){
            successCallback(event.target.result);
        }
        reader.readAsDataURL(file);
    }

    // Chuẩn bị hiển thị

    reviewPlugin.addPreviewImage = function (container, imageDataUrl){
        $(container).append('<div class="jpreview-image" style="background-image: url('+ imageDataUrl +')"></div>');
    }

    // Hiển thị ảnh thông qua Input bất kì
    reviewPlugin.preview = function (selection){
        var container = $(selection).data('preview-container');

        $(selection).change(function(){
            $(container).empty();
            $.each(selection.files, function(index, file){
                var imageData = reviewPlugin.readImageData(file, function(data){
                    reviewPlugin.addPreviewImage(container,data);
                });
            });
        });      
    }

    var selectors = $(this);
    return $.each(selectors, function(index, selector){
        reviewPlugin.preview(selector);
    });

} ( jQuery ));
