let lists = document.querySelectorAll(".list");
                let leftBox = document.querySelector("#left");
                let rightBox = document.querySelector("#right");

                for(list of lists){
                        list.addEventListener("dragstart", function(e){
                                let selected = e.target;

                                rightBox.addEventListener("dragover", function(e){
                                        e.preventDefault();
                                })

                                rightBox.addEventListener("drop", function(e){
                                        rightBox.appendChild(selected);
                                        selected = null;
                                })

                                leftBox.addEventListener("dragover", function(e){
                                        e.preventDefault();
                                })

                                leftBox.addEventListener("drop", function(e){
                                        leftBox.appendChild(selected);
                                        selected = null;
                                })
                        });

                        
                }